
import { Question, ServiceCategory, ResultProfile } from './types';

export const COLORS = {
  bg: '#030712',
  cyan: '#00f2ff',
  proBlue: '#486BF5',
};

export const QUESTIONS: Question[] = [
  {
    id: 1,
    title: 'Darky analiza: ¿Cómo se desplaza tu ecommerce hoy?',
    type: 'single',
    options: [
      { id: 'A', icon: '🧱', label: 'Prototipo Inicial', description: 'Buscamos lanzar un ecommerce más robusto o migrar a una arquitectura escalable.' },
      { id: 'B', icon: '🚀', label: 'Propulsión Limitada', description: 'La nave avanza, pero los sistemas actuales restringen nuestra velocidad de venta.' },
      { id: 'C', icon: '🧯', label: 'Alerta de Motor', description: 'Demasiadas incidencias técnicas y caídas en momentos críticos de venta.' },
      { id: 'D', icon: '🛰️', label: 'Órbita Aislada', description: 'Nuestros sistemas no logran una conexión fluida con el ecommerce.' },
    ]
  },
  {
    id: 2,
    title: '¿Qué anomalía detectas en tu radar de ventas?',
    type: 'single',
    options: [
      { id: 'A', icon: '🏗️', label: 'Arquitectura por Mejorar', description: 'Nuestra tecnología actual nos impide escalar y crecer en ventas.' },
      { id: 'B', icon: '☄️', label: 'Falta de Sincronización', description: 'Los datos no fluyen correctamente entre nuestro ERP/CRM y la tienda.' },
      { id: 'C', icon: '🧑‍🔧', label: 'Sobrecarga de Errores', description: 'El equipo técnico dedica demasiado tiempo a corregir fallos constantes.' },
      { id: 'D', icon: '🧩', label: 'Carencia de Funcionalidades', description: 'Necesitamos herramientas específicas (B2B, DNI, Facturación) que no tenemos.' },
    ]
  },
  {
    id: 3,
    title: '¿Qué sistemas tienes integrados actualmente?',
    subtitle: 'Darky escanea tu infraestructura tecnológica:',
    type: 'multiple',
    options: [
      { id: 'erp', icon: '🏢', label: 'Sistemas ERP / CRM', description: 'SAP, Oracle, Odoo, Salesforce u otros.' },
      { id: 'vtex', icon: 'V', label: 'Plataforma VTEX', description: 'Arquitectura nativa para escalabilidad.' },
      { id: 'platform', icon: '🌐', label: 'Otras Plataformas', description: 'Shopify, Magento, WooCommerce, etc.' },
      { id: 'nothing', icon: '🌑', label: 'No tengo ecommerce', description: 'Buscamos iniciar nuestra primera misión digital.' },
    ]
  },
  {
    id: 4,
    title: '¿En qué cuadrante de tiempo debemos actuar?',
    type: 'single',
    options: [
      { id: 'A', icon: '⚡', label: 'Prioridad Inmediata', description: 'Necesitamos soluciones en menos de 30 días.' },
      { id: 'B', icon: '🗓️', label: 'Próximo Ciclo', description: 'Planificación para el trimestre en curso.' },
      { id: 'C', icon: '🔭', label: 'Evaluación Estratégica', description: 'Buscamos asesoría para el futuro del negocio.' },
    ]
  }
];

export const RESULTS: Record<ServiceCategory, ResultProfile> = {
  [ServiceCategory.Desarrollo]: {
    id: ServiceCategory.Desarrollo,
    serviceName: 'Desarrollo ecommerce',
    captainName: 'Darky - Ingeniero de Sistemas',
    title: 'Diagnóstico de la misión',
    icon: '🏗️',
    narrative: 'Implementar o migrar tu ecommerce a una plataforma más robusta y escalable.',
    businessBenefit: 'Un canal digital preparado para crecer.',
    cta: 'Iniciar Evolución Digital',
    serviceUrl: 'https://prodequa.com/desarrollo-ecommerce',
    casesUrl: 'https://prodequa.com/casos-de-exito',
  },
  [ServiceCategory.Soporte]: {
    id: ServiceCategory.Soporte,
    serviceName: 'Soporte ecommerce',
    captainName: 'Darky - Guardián de Estabilidad',
    title: 'Diagnóstico de la misión',
    icon: '🛡️',
    narrative: 'Estabilizar y mantener tu ecommerce con soporte continuo.',
    businessBenefit: 'Menos incidencias y mejor operación diaria.',
    cta: 'Activar Escudo Operativo',
    serviceUrl: 'https://prodequa.com/soporte-y-mantenimiento-vtex',
    casesUrl: 'https://prodequa.com/casos-de-exito',
  },
  [ServiceCategory.Integracion]: {
    id: ServiceCategory.Integracion,
    serviceName: 'Integración ecommerce',
    captainName: 'Darky - Especialista en Enlace',
    title: 'Diagnóstico de la misión',
    icon: '🔗',
    narrative: 'Conectar ERP/CRM con el ecommerce para sincronizar inventario, precios y pedidos.',
    businessBenefit: 'menos errores y menos carga manual para tu equipo.',
    cta: 'Sincronizar Mi Nave',
    serviceUrl: 'https://prodequa.com/integraciones-ecommerce',
    casesUrl: 'https://prodequa.com/casos-de-exito',
  },
  [ServiceCategory.Soluciones]: {
    id: ServiceCategory.Soluciones,
    serviceName: 'Soluciones ecommerce',
    captainName: 'Darky - Estratega de Crecimiento',
    title: 'Diagnóstico de la misión',
    icon: '🚀',
    narrative: 'Agregar funcionalidades como DNI/RUC, factura ERP, módulos B2B, Cyber Timer, etc.',
    businessBenefit: 'nuevas capacidades sin reconstruir tu arquitectura.',
    cta: 'Instalar Módulos de Potencia',
    serviceUrl: 'https://prodequa.com/soluciones-ecommerce',
    casesUrl: 'https://prodequa.com/casos-de-exito',
  }
};
