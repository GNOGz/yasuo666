interface Winner{
    player?: number
}
export const Winnerscreen = ({player}:Winner) => {
    return (
            <div className="w-full h-full bg-white opacity-85 absolute z-50 flex items-center justify-center">
                <h1 className="text-outline text-9xl select-none">P{player} WIN!</h1>
            </div>
    );
};
