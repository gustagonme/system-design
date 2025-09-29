// Switch - Basado en ILibTbSwitch interface
// Referencia: knowledge_base/tech_block_lib/atoms/switch/

// Switch básico (como el ejemplo de la documentación)
export const switchCustom = {
    label: 'Modo Oscuro',
    class: 'switch-custom',
    inputId: 'darkMode',
    name: 'darkMode',
    ngModel: false, // Inicialmente apagado
    disabled: false,
    error: false,
    style: {
        marginBottom: '10px'
    },
    libTbChange: (e) => {
        console.log('Switch - Cambio de estado:', e.checked ? 'Activado' : 'Desactivado', e);
        
        // Ejemplo de lógica adicional basada en el estado
        if (e.checked) {
            console.log('🌙 Activando modo oscuro...');
            // Aquí podrías aplicar el tema oscuro
        } else {
            console.log('☀️ Desactivando modo oscuro...');
            // Aquí podrías aplicar el tema claro
        }
    }
};
