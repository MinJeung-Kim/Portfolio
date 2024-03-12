export interface KeyType {
  mainBusiness: string;
  role: string[];
  stack: string[];
  businessPeriod: string;
  development?: string;
  detail?: string[];
}

export type Careers = {
  id: string;
  service: string;
  company: string;
  image: string;
  content: KeyType;
};
