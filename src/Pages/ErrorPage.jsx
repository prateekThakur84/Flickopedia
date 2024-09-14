import { NavLink, useNavigate } from "react-router-dom";

export const ErrorPage = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gray-100">
            <img 
                src="https://img.freepik.com/free-vector/hand-drawn-404-error_23-2147746234.jpg?t=st=1726173544~exp=1726177144~hmac=2439deb46d229828ed98684d10b9f193e6da9ad0cf83f2f1f1e76b029daf3912&w=740" 
                alt="404 Error"
                className="w-2/3 md:w-1/2 lg:w-1/3 max-w-xs"
            />

            <div className="mt-4 flex flex-col items-center gap-4">
                <NavLink 
                    to="/" 
                    className="py-2 px-4 font-bold border rounded-lg w-full max-w-xs text-center bg-red-500 text-white"
                >
                    Go to Home Page
                </NavLink>

                <button 
                    className="py-2 px-4 font-bold border rounded-lg w-full max-w-xs text-center bg-green-500 text-white"
                    onClick={handleGoBack}
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};
