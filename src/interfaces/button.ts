export interface ButtonProps {
  text: string;
  disabled: boolean;
  action: () => void;
  type?: string;
}
