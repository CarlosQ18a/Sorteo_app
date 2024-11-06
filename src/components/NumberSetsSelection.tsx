import React from 'react';

interface NumberSetsSelectionProps {
    numberSets: number[][];
    selectedSetIndex: number | null;
    handleSelectSet: (index: number) => void;
}

const NumberSetsSelection: React.FC<NumberSetsSelectionProps> = ({
    numberSets,
    selectedSetIndex,
    handleSelectSet,
}) => {
    return (
        <div>
            {numberSets.map((set, index) => (
                <button
                    key={index}
                    className="boton-transparente" /* Aplica la clase aquí */
                    onClick={() => handleSelectSet(index)}
                    style={{
                        backgroundColor: selectedSetIndex === index ? 'lightgreen' : 'transparent',
                    }}
                >
                    Conjunto {index + 1}: {set.join(', ')}
                </button>
            ))}
        </div>
    );
};

export default NumberSetsSelection;

