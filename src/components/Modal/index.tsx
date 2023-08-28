export default function Modal({
  children,
  closeModal,
  isOpen,
}: {
  children: React.ReactNode;
  closeModal: () => void;
  isOpen: boolean;
}) {
  return (
    <div
      className={`modal fixed left-0 top-0 z-[12] ${
        isOpen ? "w-[100vw] h-[30vh]" : "w-[0px] h-[0px]"
      } transition-all md:hidden`}
      onClick={closeModal}
    >
      {children}
    </div>
  );
}
