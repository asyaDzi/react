interface TabMain {
  title: string;
  onClick: () => {};
  isActive: boolean;
}

export const Tab = ({ title, onClick, isActive }: TabMain) => {
  return (
    <button disabled={isActive} onClick={onClick}>
      {title}
    </button>
  );
};
