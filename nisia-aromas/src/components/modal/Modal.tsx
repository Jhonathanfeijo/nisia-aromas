const Modal = ({ zIndex, children }: { zIndex?: number, children:React.ReactNode }) => {
    return (
        <>
            <div className={`fixed bg-black/20 flex justify-center items-center top-0 left-0 w-screen h-screen ${zIndex ? `z-[${zIndex}]` : ""}`}>
                {children}
            </div>
        </>);
}

export default Modal;