import React from 'react';

interface LotteryProps {
    numberSets: number[][];
    selectedSetIndex: number | null;
    handleSelectSet: (index: number) => void;
    handleCheckWinner: () => void;
    isWinner: boolean | null;
    winningSet: number[];
}

const Lottery: React.FC<LotteryProps> = ({
    numberSets,
    selectedSetIndex,
    handleSelectSet,
    handleCheckWinner,
    isWinner,
    winningSet,
}) => {
    return (
        <div>
            <h1>Lotería</h1>
            <div>
                <h2>Selecciona tu conjunto de números:</h2>
                {numberSets.map((set, index) => (
                    <button
                        key={index}
                        onClick={() => handleSelectSet(index)}
                        style={{ margin: '10px', padding: '10px', backgroundColor: selectedSetIndex === index ? 'lightgreen' : 'white' }}
                    >
                        Conjunto {index + 1}: {set.join(', ')}
                    </button>
                ))}
            </div>

            <div>
                <button onClick={handleCheckWinner}>Comprobar si ganaste</button>
            </div>

            {isWinner !== null && (
                <div style={{ marginTop: '20px' }}>
                    {isWinner ? (
                        <h2 style={{ color: 'green' }}>¡Felicidades! Has seleccionado el conjunto ganador.</h2>
                    ) : (
                        <h2 style={{ color: 'red' }}>Lo siento, no ganaste. ¡Inténtalo de nuevo!</h2>
                    )}
                </div>
            )}

            <div>
                <h3>Números ganadores:</h3>
                <p>{winningSet.join(', ')}</p>
            </div>
        </div>
    );
};

export default Lottery;
