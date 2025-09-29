// Paginator - Basado en ILibTbPaginator interface
// Referencia: knowledge_base/tech_block_lib/molecules/paginator/

// Paginator completo (como el ejemplo de la documentación)
export const paginatorCustom = {
    dataQaId: 'paginator-productos',
    totalRecords: 150, // Total de registros
    rows: 10, // Registros por página
    first: 0, // Índice del primer registro (0-based)
    pageLinkSize: 5, // Número de enlaces de página a mostrar
    rowsPerPageOptions: [5, 10, 20, 50, { showAll: 'Todos' }], // Opciones de registros por página
    alwaysShow: true, // Mostrar siempre, incluso con una sola página
    showFirstLastIcon: true, // Mostrar botones primera/última página
    showPageLinks: true, // Mostrar enlaces de página
    showJumpToPageDropdown: true, // Mostrar dropdown para saltar a página
    complementaryText: true, // Mostrar texto complementario
    
    // Configuración de botones
    styleBtnPaginator: 'fill', // 'fill' | 'stroke' | 'text'
    typeBtnPaginator: 'primary', // 'primary' | 'secondary' | 'tertiary' | 'error'
    
    // Configuración de dropdown
    dropdownIcon: 'fas fa-chevron-down',
    dropdownAppendTo: 'body',
    dropdownScrollHeight: '200px',
    
    // Templates de texto
    currentPageReportTemplate: 'Página {currentPage} de {totalPages}',
    complementaryTextTemplate: 'Mostrando {first} a {last} de {totalRecords} productos',
    
    // Estilos
    style: {
        width: '100%',
        margin: '20px 0',
        padding: '15px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #dee2e6'
    },
    class: 'paginator-custom',
    
    // Evento principal de cambio de página
    libTbOnPageChange: (e) => {
        console.log('Paginator - Cambio de página:', e);
        console.log(`📄 Página: ${e.page + 1}`); // +1 porque e.page es 0-based
        console.log(`📊 Primer registro: ${e.first + 1}`); // +1 para mostrar 1-based
        console.log(`📋 Registros por página: ${e.rows}`);
        console.log(`📚 Total de páginas: ${e.pageCount}`);
        
        // Actualizar el modelo
        paginatorCustom.first = e.first;
        paginatorCustom.rows = e.rows;
        
        // Calcular información adicional
        const currentPage = e.page + 1; // Página actual (1-based)
        const totalPages = e.pageCount;
        const firstRecord = e.first + 1; // Primer registro de la página (1-based)
        const lastRecord = Math.min(e.first + e.rows, paginatorCustom.totalRecords); // Último registro
        const totalRecords = paginatorCustom.totalRecords;
        
        console.log(`\n📊 Información de paginación:`);
        console.log(`   Página actual: ${currentPage} de ${totalPages}`);
        console.log(`   Registros: ${firstRecord} a ${lastRecord} de ${totalRecords}`);
        console.log(`   Registros por página: ${e.rows}`);
        
        // Simular carga de datos para la nueva página
        console.log(`\n🔄 Simulando carga de datos para página ${currentPage}:`);
        simulateDataLoad(currentPage, e.rows, firstRecord, lastRecord);
        
        // Lógica adicional basada en la página
        if (currentPage === 1) {
            console.log('🏠 Estás en la primera página');
        } else if (currentPage === totalPages) {
            console.log('🏁 Estás en la última página');
        } else {
            console.log(`📖 Navegando por la página ${currentPage} de ${totalPages}`);
        }
        
        // Verificar si se cambió el número de registros por página
        if (e.rows !== getDefaultRows()) {
            console.log(`📏 Cambio en registros por página: ${getDefaultRows()} → ${e.rows}`);
            updateDefaultRows(e.rows);
        }
        
        // Información sobre navegación
        const hasNext = currentPage < totalPages;
        const hasPrevious = currentPage > 1;
        
        console.log(`\n🧭 Navegación disponible:`);
        console.log(`   ← Anterior: ${hasPrevious ? 'Disponible' : 'No disponible'}`);
        console.log(`   → Siguiente: ${hasNext ? 'Disponible' : 'No disponible'}`);
        
        // Mostrar rango de páginas visibles en el paginador
        const pageLinkSize = paginatorCustom.pageLinkSize || 5;
        const startPage = Math.max(1, currentPage - Math.floor(pageLinkSize / 2));
        const endPage = Math.min(totalPages, startPage + pageLinkSize - 1);
        
        console.log(`\n🔗 Enlaces de página visibles: ${startPage} a ${endPage}`);
        
        // Simular actualización de URL o estado de la aplicación
        updateApplicationState(currentPage, e.rows, e.first);
    }
};

// Variable para rastrear los registros por página por defecto
let defaultRows = 10;

// Función para obtener los registros por página por defecto
const getDefaultRows = () => defaultRows;

// Función para actualizar los registros por página por defecto
const updateDefaultRows = (newRows) => {
    defaultRows = newRows;
    console.log(`📏 Registros por página actualizados a: ${newRows}`);
};

// Función para simular carga de datos
const simulateDataLoad = (page, rows, firstRecord, lastRecord) => {
    console.log(`📦 Cargando datos para página ${page}:`);
    
    // Simular productos para la página actual
    const products = [];
    for (let i = firstRecord; i <= lastRecord; i++) {
        products.push({
            id: i,
            name: `Producto ${i}`,
            category: `Categoría ${Math.ceil(i / 10)}`,
            price: (Math.random() * 1000 + 50).toFixed(2),
            stock: Math.floor(Math.random() * 100) + 1
        });
    }
    
    console.log(`   📋 Productos cargados:`, products.length);
    console.log(`   🏷️ Rango: ${products[0]?.name} a ${products[products.length - 1]?.name}`);
    
    // Simular tiempo de carga
    setTimeout(() => {
        console.log(`   ✅ Datos cargados exitosamente para página ${page}`);
    }, 100);
    
    return products;
};

// Función para actualizar el estado de la aplicación
const updateApplicationState = (currentPage, rows, first) => {
    console.log(`🔄 Actualizando estado de la aplicación:`);
    console.log(`   URL: /productos?page=${currentPage}&size=${rows}&offset=${first}`);
    console.log(`   Estado: { page: ${currentPage}, size: ${rows}, offset: ${first} }`);
    
    // Aquí se podría actualizar la URL del navegador
    // window.history.pushState({}, '', `/productos?page=${currentPage}&size=${rows}`);
    
    // Actualizar elemento en el DOM si es necesario
    const paginatorElement = document.getElementById('paginator-1');
    if (paginatorElement) {
        paginatorElement.custom = { ...paginatorCustom };
    }
};

// Funciones auxiliares para navegación programática
export const paginatorNavigationHelpers = {
    // Ir a la primera página
    goToFirstPage: () => {
        console.log('⏮️ Navegando a la primera página');
        paginatorCustom.first = 0;
        const pageChangeEvent = {
            page: 0,
            first: 0,
            rows: paginatorCustom.rows,
            pageCount: Math.ceil(paginatorCustom.totalRecords / paginatorCustom.rows)
        };
        paginatorCustom.libTbOnPageChange(pageChangeEvent);
    },
    
    // Ir a la última página
    goToLastPage: () => {
        const totalPages = Math.ceil(paginatorCustom.totalRecords / paginatorCustom.rows);
        const lastPageFirst = (totalPages - 1) * paginatorCustom.rows;
        
        console.log('⏭️ Navegando a la última página');
        paginatorCustom.first = lastPageFirst;
        
        const pageChangeEvent = {
            page: totalPages - 1,
            first: lastPageFirst,
            rows: paginatorCustom.rows,
            pageCount: totalPages
        };
        paginatorCustom.libTbOnPageChange(pageChangeEvent);
    },
    
    // Ir a una página específica
    goToPage: (pageNumber) => {
        const totalPages = Math.ceil(paginatorCustom.totalRecords / paginatorCustom.rows);
        
        if (pageNumber < 1 || pageNumber > totalPages) {
            console.log(`❌ Número de página inválido: ${pageNumber} (rango: 1-${totalPages})`);
            return;
        }
        
        const targetPage = pageNumber - 1; // Convertir a 0-based
        const targetFirst = targetPage * paginatorCustom.rows;
        
        console.log(`🎯 Navegando a la página ${pageNumber}`);
        paginatorCustom.first = targetFirst;
        
        const pageChangeEvent = {
            page: targetPage,
            first: targetFirst,
            rows: paginatorCustom.rows,
            pageCount: totalPages
        };
        paginatorCustom.libTbOnPageChange(pageChangeEvent);
    },
    
    // Cambiar registros por página
    changeRowsPerPage: (newRows) => {
        const validOptions = [5, 10, 20, 50];
        
        if (!validOptions.includes(newRows) && newRows !== paginatorCustom.totalRecords) {
            console.log(`❌ Opción inválida: ${newRows}. Opciones válidas:`, validOptions);
            return;
        }
        
        console.log(`📏 Cambiando registros por página a: ${newRows}`);
        
        // Recalcular la página actual para mantener el contexto
        const currentPage = Math.floor(paginatorCustom.first / paginatorCustom.rows);
        const newFirst = Math.min(currentPage * newRows, paginatorCustom.totalRecords - 1);
        const newPageCount = Math.ceil(paginatorCustom.totalRecords / newRows);
        const newCurrentPage = Math.floor(newFirst / newRows);
        
        paginatorCustom.rows = newRows;
        paginatorCustom.first = newFirst;
        
        const pageChangeEvent = {
            page: newCurrentPage,
            first: newFirst,
            rows: newRows,
            pageCount: newPageCount
        };
        paginatorCustom.libTbOnPageChange(pageChangeEvent);
    },
    
    // Obtener información actual del paginador
    getCurrentInfo: () => {
        const currentPage = Math.floor(paginatorCustom.first / paginatorCustom.rows) + 1;
        const totalPages = Math.ceil(paginatorCustom.totalRecords / paginatorCustom.rows);
        const firstRecord = paginatorCustom.first + 1;
        const lastRecord = Math.min(paginatorCustom.first + paginatorCustom.rows, paginatorCustom.totalRecords);
        
        const info = {
            currentPage,
            totalPages,
            firstRecord,
            lastRecord,
            totalRecords: paginatorCustom.totalRecords,
            rowsPerPage: paginatorCustom.rows
        };
        
        console.log('📊 Información actual del paginador:', info);
        return info;
    }
};
