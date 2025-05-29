import React from "react";

const Loading = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <div className="animate-spin rounded-full h-6 w-6 border-2 border-secondary border-t-transparent mx-auto mb-4"></div>
                <p className="text-xs text-lg font-medium">Chargement en cours...</p>
            </div>
        </div>
    );
};

export default Loading;
