// Breadcrumb - Basado en ILibTbBreadcrumb interface
// Referencia: knowledge_base/tech_block_lib/atoms/breadcrumb/

// Breadcrumb básico (como el ejemplo de la documentación)
export const breadcrumbCustom = {
    home: {
        label: 'Inicio',
        icon: 'fa fa-user',
    },
    items: [
        { label: 'F.C. Barcelona', icon: 'fa fa-heart' },
        { label: 'Squad' },
        { label: 'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi' },
    ],
    libTbOnItemClick: e => {
        console.log('Click en breadcrumb item:', e);
    }
};

// Breadcrumb con iconos personalizados
export const breadcrumbIconCustom = {
    home: {
        label: 'Dashboard',
        icon: 'fas fa-home',
    },
    items: [
        { label: 'Usuarios', icon: 'fas fa-users' },
        { label: 'Configuración', icon: 'fas fa-cog' },
        { label: 'Perfil', icon: 'fas fa-user-circle' },
    ],
    iconRight: 'fas fa-chevron-right',
    class: 'breadcrumb-icon-custom',
    libTbOnItemClick: e => {
        console.log('Click en breadcrumb con iconos:', e);
    }
};

// Breadcrumb simple sin iconos
export const breadcrumbSimpleCustom = {
    home: {
        label: 'Home',
    },
    items: [
        { label: 'Products' },
        { label: 'Electronics' },
        { label: 'Smartphones' },
        { label: 'iPhone 15' },
    ],
    style: {
        fontSize: '14px',
        padding: '10px'
    },
    class: 'breadcrumb-simple-custom',
    libTbOnItemClick: e => {
        console.log('Click en breadcrumb simple:', e);
    }
};

// Breadcrumb con URLs para navegación
export const breadcrumbNavigationCustom = {
    home: {
        label: 'Portal',
        icon: 'fas fa-globe',
        url: '/',
    },
    items: [
        { label: 'Documentos', icon: 'fas fa-folder', url: '/documents' },
        { label: 'Reportes', icon: 'fas fa-chart-bar', url: '/documents/reports' },
        { label: 'Ventas 2024', url: '/documents/reports/sales-2024' },
    ],
    iconRight: 'fas fa-angle-right',
    style: {
        backgroundColor: '#f8f9fa',
        padding: '12px',
        borderRadius: '8px'
    },
    class: 'breadcrumb-navigation-custom',
    libTbOnItemClick: e => {
        console.log('Navegando a:', e);
        // Aquí normalmente harías la navegación: this.router.navigate([e.url]);
    }
};

