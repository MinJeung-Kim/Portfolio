import {
  ReactNode,
  createContext,
  createRef,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import AuthService from "@/service/auth";

const AuthContext = createContext({});

const contextRef = createRef();

type State = {
  authService: AuthService;
  authErrorEventBus: AuthErrorEventBus;
  children: ReactNode;
};

type User =
  | undefined
  | {
      token: String;
    };

export function AuthProvider({
  authService,
  authErrorEventBus,
  children,
}: State) {
  const [user, setUser] = useState<User>(undefined);

  useImperativeHandle(contextRef, () => (user ? user.token : undefined));

  useEffect(() => {
    authErrorEventBus.listen((err: any) => {
      console.log(err);
      setUser(undefined);
    });
  }, [authErrorEventBus]);

  useEffect(() => {
    authService.me().then(setUser).catch(console.error);
  }, [authService]);

  const signUp = useCallback(
    async (
      username: string,
      password: string,
      name: string,
      email: string,
      url: string
    ) =>
      authService
        .signup(username, password, name, email, url)
        .then((user) => setUser(user)),
    [authService]
  );

  const logIn = useCallback(
    async (username: string, password: string) =>
      authService.login(username, password).then((user) => setUser(user)),
    [authService]
  );

  const logout = useCallback(
    async () => authService.logout().then(() => setUser(undefined)),
    [authService]
  );

  const context = useMemo(
    () => ({
      user,
      signUp,
      logIn,
      logout,
    }),
    [user, signUp, logIn, logout]
  );

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}

type CallbackFunction = (error: Error) => void;

export class AuthErrorEventBus {
  private callback!: CallbackFunction;

  listen(callback: CallbackFunction): void {
    this.callback = callback;
  }
  notify(error: Error): void {
    if (this.callback) {
      this.callback(error);
    }
  }
}

export default AuthContext;
export const fetchToken = () => contextRef.current;
export const useAuth = () => useContext(AuthContext);
