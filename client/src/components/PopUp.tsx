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
            className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 backdrop-blur-sm sm:items-center"
            onClick={onClose}
        >
            <div
                className="max-h-[calc(100vh-2rem)] w-full max-w-md overflow-y-auto rounded-lg bg-white p-8"
                onClick={(event) => event.stopPropagation()}
            >
                <h2 className="mb-4 text-2xl font-bold">{name}</h2>
                <p className="mb-4">{description}</p>
                <img src={image} alt={name} className="mb-4 w-full object-contain" />
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    View Project
                </a>
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
