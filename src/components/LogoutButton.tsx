export function LogoutButton() {
    const signOut = async () => {
        // await supabaseClient.auth.signOut();
        // FIX supabaseClient.auth.signOut greift nicht immer
        Object.keys(localStorage).forEach((key) => {
            if (key.includes('sxsqeyhzwaavyyxvoxdg')) {
                localStorage.removeItem(key);
            }
        });
        location.replace("/");
    };

    return (
        <button
            onClick={signOut}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
            Sign Out
        </button>
    );
}
