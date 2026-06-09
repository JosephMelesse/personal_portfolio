type PopUpProps = {
    isOpen: boolean;
    name: string;
    description: string;
    image: string;
    link: string;
    onClose: () => void;
};

export default function PopUp({ isOpen, name, description, image, link, onClose, } : PopUpProps) { 
    if (!isOpen) { 
        return null;
    }
    return (
        <div
            className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 p-4 sm:items-center"
            onClick={onClose}
        >
            <div
                className="max-h-[calc(100vh-2rem)] w-full max-w-2xl overflow-y-auto rounded-lg bg-white p-6 sm:p-8"
                onClick={(event) => event.stopPropagation()}
            >
                <div className="flex justify-between">
                    <h2 className="mb-4 text-2xl font-bold">{name}</h2>
                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                        GitHub
                    </a>
                </div>
                <p className="mb-4">{description}</p>
                <img src={image} alt={name} className="mb-4 w-full object-contain" />
                <button
                    onClick={onClose}
                    className="mt-4 rounded bg-gray-200 px-4 py-2 hover:bg-gray-300"
                >
                    Close
                </button>
            </div>
        </div>
    );
}
