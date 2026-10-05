/**
 * Banco de Dados de Horários Discentes - CECATE / UFG
 * Arquitetura totalmente modular por semestres.
 * Permite inserção simples de novos semestres (ex: 2027.1) e consulta dinâmica.
 */

const CECATE_VERSION = "v.1.1.2";
const APP_VERSION = CECATE_VERSION;

const Database = {
    version: CECATE_VERSION,
    activeSemester: "2026.2",
    
    semesters: {
        "2026.2": {
            label: "2026/2 (Vigente)",
            students: [
                {
                    id: "student_1",
                    name: "Ana Paula Ferreira da Silva",
                    matricula: "202203672",
                    curso: "Engenharia de Transportes",
                    vinculo: "REGULAR",
                    cidade: "Aparecida de Goiânia",
                    codigoVerificacao: "c0a5f6db03",
                    courses: [
                        { code: "EEC0096", name: "FENÔMENOS DE TRANSPORTE", teacher: "DANILO DUARTE COSTA E SILVA", local: "CAE-EMC-202", schedule: "Qui 08:50 - 10:50" },
                        { code: "IFI0325", name: "FÍSICA III", teacher: "DANIEL LOPO DA SILVA", local: "Sala 504 CAP", schedule: "Ter/Sex 13:10 - 14:50" },
                        { code: "CIT0137", name: "PROJETO DE TERMINAIS DE PASSAGEIROS", teacher: "RODRIGO PINHEIRO TOFFANO PEREIRA", local: "Sala de Desenho - 109 - FCT/Aparecida", schedule: "Qui 13:10 - 16:50" },
                        { code: "CIT0111", name: "SEGURANÇA DOS SISTEMAS DE TRANSPORTE", teacher: "CINTIA ISABEL DE CAMPOS ROQUE GUERRERO", local: "Sala 506 - FCT/Aparecida", schedule: "Qua 08:00 - 11:40" },
                        { code: "CIT0118", name: "TRABALHO DE CONCLUSÃO DE CURSO 2", teacher: "POLIANA DE SOUSA LEITE", local: "A definir", schedule: "Qua/Qui 11:40 - 12:30" },
                        { code: "CIT0540", name: "TRÂNSITO E EDUCAÇÃO", teacher: "CINTIA ISABEL DE CAMPOS ROQUE GUERRERO", local: "Mini-auditório - Sala 202 (2º andar FCT)", schedule: "Sex 08:00 - 11:40" },
                        { code: "CIT0330", name: "TRANSPORTES E TURISMO", teacher: "RODRIGO PINHEIRO TOFFANO PEREIRA", local: "100% EAD - 100% Assíncrona", schedule: "EAD" }
                    ],
                    scheduleGrid: {
                        "Quarta": {
                            "08:00 - 08:50": { code: "CIT0111", name: "SEGURANÇA DOS SISTEMAS DE TRANSPORTE", teacher: "CINTIA ISABEL DE CAMPOS ROQUE GUERRERO", local: "Sala 506 - FCT" },
                            "08:50 - 09:40": { code: "CIT0111", name: "SEGURANÇA DOS SISTEMAS DE TRANSPORTE", teacher: "CINTIA ISABEL DE CAMPOS ROQUE GUERRERO", local: "Sala 506 - FCT" },
                            "10:00 - 10:50": { code: "CIT0111", name: "SEGURANÇA DOS SISTEMAS DE TRANSPORTE", teacher: "CINTIA ISABEL DE CAMPOS ROQUE GUERRERO", local: "Sala 506 - FCT" },
                            "10:50 - 11:40": { code: "CIT0111", name: "SEGURANÇA DOS SISTEMAS DE TRANSPORTE", teacher: "CINTIA ISABEL DE CAMPOS ROQUE GUERRERO", local: "Sala 506 - FCT" },
                            "11:40 - 12:30": { code: "CIT0118", name: "TCC 2", teacher: "POLIANA DE SOUSA LEITE", local: "A definir" }
                        },
                        "Quinta": {
                            "08:50 - 09:40": { code: "EEC0096", name: "FENÔMENOS DE TRANSPORTE", teacher: "DANILO DUARTE COSTA E SILVA", local: "CAE-EMC-202" },
                            "10:00 - 10:50": { code: "EEC0096", name: "FENÔMENOS DE TRANSPORTE", teacher: "DANILO DUARTE COSTA E SILVA", local: "CAE-EMC-202" },
                            "11:40 - 12:30": { code: "CIT0118", name: "TCC 2", teacher: "POLIANA DE SOUSA LEITE", local: "A definir" },
                            "13:10 - 14:00": { code: "CIT0137", name: "PROJETO DE TERMINAIS DE PASSAGEIROS", teacher: "RODRIGO PINHEIRO TOFFANO PEREIRA", local: "Sala de Desenho - 109" },
                            "14:00 - 14:50": { code: "CIT0137", name: "PROJETO DE TERMINAIS DE PASSAGEIROS", teacher: "RODRIGO PINHEIRO TOFFANO PEREIRA", local: "Sala de Desenho - 109" },
                            "14:50 - 15:40": { code: "CIT0137", name: "PROJETO DE TERMINAIS DE PASSAGEIROS", teacher: "RODRIGO PINHEIRO TOFFANO PEREIRA", local: "Sala de Desenho - 109" },
                            "16:00 - 16:50": { code: "CIT0137", name: "PROJETO DE TERMINAIS DE PASSAGEIROS", teacher: "RODRIGO PINHEIRO TOFFANO PEREIRA", local: "Sala de Desenho - 109" }
                        },
                        "Sexta": {
                            "08:00 - 08:50": { code: "CIT0540", name: "TRÂNSITO E EDUCAÇÃO", teacher: "CINTIA ISABEL DE CAMPOS ROQUE GUERRERO", local: "Mini-auditório Sala 202" },
                            "08:50 - 09:40": { code: "CIT0540", name: "TRÂNSITO E EDUCAÇÃO", teacher: "CINTIA ISABEL DE CAMPOS ROQUE GUERRERO", local: "Mini-auditório Sala 202" },
                            "10:00 - 10:50": { code: "CIT0540", name: "TRÂNSITO E EDUCAÇÃO", teacher: "CINTIA ISABEL DE CAMPOS ROQUE GUERRERO", local: "Mini-auditório Sala 202" },
                            "10:50 - 11:40": { code: "CIT0540", name: "TRÂNSITO E EDUCAÇÃO", teacher: "CINTIA ISABEL DE CAMPOS ROQUE GUERRERO", local: "Mini-auditório Sala 202" },
                            "13:10 - 14:00": { code: "IFI0325", name: "FÍSICA III", teacher: "DANIEL LOPO DA SILVA", local: "Sala 504 CAP" },
                            "14:00 - 14:50": { code: "IFI0325", name: "FÍSICA III", teacher: "DANIEL LOPO DA SILVA", local: "Sala 504 CAP" }
                        },
                        "Terça": {
                            "13:10 - 14:00": { code: "IFI0325", name: "FÍSICA III", teacher: "DANIEL LOPO DA SILVA", local: "Sala 504 CAP" },
                            "14:00 - 14:50": { code: "IFI0325", name: "FÍSICA III", teacher: "DANIEL LOPO DA SILVA", local: "Sala 504 CAP" }
                        }
                    }
                },

                {
                    id: "student_3",
                    name: "Guilherme Junqueira Serafim",
                    matricula: "202301988",
                    curso: "Engenharia de Transportes",
                    vinculo: "REGULAR",
                    cidade: "Aparecida de Goiânia",
                    codigoVerificacao: "Img1-Doc",
                    courses: [
                        { code: "CIT0099", name: "ANÁLISE DE INVESTIMENTO EM TRANSPORTES", teacher: "MATHEUS SILVA OLIVEIRA", local: "Sala 504 - FCT", schedule: "Qui 13:10 - 16:50" },
                        { code: "IME0356", name: "CÁLCULO 2A", teacher: "MAYK JOAQUIM DOS SANTOS", local: "Sala 208 - FCT, CAP", schedule: "Seg/Qua/Sex 13:10 - 14:50" },
                        { code: "CIT0097", name: "ENGENHARIA DE TRÁFEGO 1", teacher: "RONNY MARCELO ALIAGA MEDRANO", local: "Lab. Desenvolvimento em Transportes (LDT)", schedule: "Qua 08:00 - 11:40" },
                        { code: "IFI0327", name: "FÍSICA EXPERIMENTAL II", teacher: "HERMINIA VERIDIANA DOS SANTOS PESSONI E SILVA", local: "Sala 203 IF-1", schedule: "Qui 08:00 - 09:40" },
                        { code: "IFI0325", name: "FÍSICA III", teacher: "DANIEL LOPO DA SILVA", local: "Sala 504 CAP", schedule: "Ter/Sex 08:00 - 09:40" },
                        { code: "CIT0557", name: "INTRODUÇÃO À INTELIGÊNCIA ARTIFICIAL GENERATIVA", teacher: "MARCOS PAULINO RORIZ JUNIOR", local: "Presencial UFG Aparecida - Sala 303 (Lab.Inf)", schedule: "Seg/Ter 10:00 - 11:40" },
                        { code: "CIT0100", name: "TECNOLOGIA AQUAVIÁRIA", teacher: "MATHEUS SILVA OLIVEIRA", local: "Sala 308 - FCT", schedule: "Sex 14:50 - 16:50" },
                        { code: "CIT0101", name: "TECNOLOGIA FERROVIÁRIA", teacher: "GEORGE WILTON ALBUQUERQUE RANGEL", local: "Sala 308 - FCT", schedule: "Qua 14:50 - 16:50" },
                        { code: "CIT0041", name: "TEORIA E TÉCNICA DE PLANEJAMENTO INTEGRADO EM TRANSPORTES", teacher: "CRISTIANO FARIAS ALMEIDA", local: "SALA 505 - FCT/Aparecida", schedule: "Ter 14:50 - 16:50" }
                    ],
                    scheduleGrid: {
                        "Segunda": {
                            "10:00 - 10:50": { code: "CIT0557", name: "IA GENERATIVA", teacher: "MARCOS PAULINO RORIZ JUNIOR", local: "Sala 303 Lab.Inf" },
                            "10:50 - 11:40": { code: "CIT0557", name: "IA GENERATIVA", teacher: "MARCOS PAULINO RORIZ JUNIOR", local: "Sala 303 Lab.Inf" },
                            "13:10 - 14:00": { code: "IME0356", name: "CÁLCULO 2A", teacher: "MAYK JOAQUIM DOS SANTOS", local: "Sala 208 - FCT" },
                            "14:00 - 14:50": { code: "IME0356", name: "CÁLCULO 2A", teacher: "MAYK JOAQUIM DOS SANTOS", local: "Sala 208 - FCT" }
                        },
                        "Terça": {
                            "08:00 - 08:50": { code: "IFI0325", name: "FÍSICA III", teacher: "DANIEL LOPO DA SILVA", local: "Sala 504 CAP" },
                            "08:50 - 09:40": { code: "IFI0325", name: "FÍSICA III", teacher: "DANIEL LOPO DA SILVA", local: "Sala 504 CAP" },
                            "10:00 - 10:50": { code: "CIT0557", name: "IA GENERATIVA", teacher: "MARCOS PAULINO RORIZ JUNIOR", local: "Sala 303 Lab.Inf" },
                            "10:50 - 11:40": { code: "CIT0557", name: "IA GENERATIVA", teacher: "MARCOS PAULINO RORIZ JUNIOR", local: "Sala 303 Lab.Inf" },
                            "14:50 - 15:40": { code: "CIT0041", name: "PLANEJAMENTO INTEGRADO", teacher: "CRISTIANO FARIAS ALMEIDA", local: "SALA 505" },
                            "16:00 - 16:50": { code: "CIT0041", name: "PLANEJAMENTO INTEGRADO", teacher: "CRISTIANO FARIAS ALMEIDA", local: "SALA 505" }
                        },
                        "Quarta": {
                            "08:00 - 08:50": { code: "CIT0097", name: "ENGENHARIA DE TRÁFEGO 1", teacher: "RONNY MARCELO ALIAGA MEDRANO", local: "Lab. LDT" },
                            "08:50 - 09:40": { code: "CIT0097", name: "ENGENHARIA DE TRÁFEGO 1", teacher: "RONNY MARCELO ALIAGA MEDRANO", local: "Lab. LDT" },
                            "10:00 - 10:50": { code: "CIT0097", name: "ENGENHARIA DE TRÁFEGO 1", teacher: "RONNY MARCELO ALIAGA MEDRANO", local: "Lab. LDT" },
                            "10:50 - 11:40": { code: "CIT0097", name: "ENGENHARIA DE TRÁFEGO 1", teacher: "RONNY MARCELO ALIAGA MEDRANO", local: "Lab. LDT" },
                            "13:10 - 14:00": { code: "IME0356", name: "CÁLCULO 2A", teacher: "MAYK JOAQUIM DOS SANTOS", local: "Sala 208 - FCT" },
                            "14:00 - 14:50": { code: "IME0356", name: "CÁLCULO 2A", teacher: "MAYK JOAQUIM DOS SANTOS", local: "Sala 208 - FCT" },
                            "14:50 - 15:40": { code: "CIT0101", name: "TECNOLOGIA FERROVIÁRIA", teacher: "GEORGE WILTON ALBUQUERQUE RANGEL", local: "Sala 308 - FCT" },
                            "16:00 - 16:50": { code: "CIT0101", name: "TECNOLOGIA FERROVIÁRIA", teacher: "GEORGE WILTON ALBUQUERQUE RANGEL", local: "Sala 308 - FCT" }
                        },
                        "Quinta": {
                            "08:00 - 08:50": { code: "IFI0327", name: "FÍSICA EXPERIMENTAL II", teacher: "HERMINIA VERIDIANA DOS SANTOS PESSONI", local: "Sala 203 IF-1" },
                            "08:50 - 09:40": { code: "IFI0327", name: "FÍSICA EXPERIMENTAL II", teacher: "HERMINIA VERIDIANA DOS SANTOS PESSONI", local: "Sala 203 IF-1" },
                            "13:10 - 14:00": { code: "CIT0099", name: "INVESTIMENTO EM TRANSPORTES", teacher: "MATHEUS SILVA OLIVEIRA", local: "Sala 504 - FCT" },
                            "14:00 - 14:50": { code: "CIT0099", name: "INVESTIMENTO EM TRANSPORTES", teacher: "MATHEUS SILVA OLIVEIRA", local: "Sala 504 - FCT" },
                            "14:50 - 15:40": { code: "CIT0099", name: "INVESTIMENTO EM TRANSPORTES", teacher: "MATHEUS SILVA OLIVEIRA", local: "Sala 504 - FCT" },
                            "16:00 - 16:50": { code: "CIT0099", name: "INVESTIMENTO EM TRANSPORTES", teacher: "MATHEUS SILVA OLIVEIRA", local: "Sala 504 - FCT" }
                        },
                        "Sexta": {
                            "08:00 - 08:50": { code: "IFI0325", name: "FÍSICA III", teacher: "DANIEL LOPO DA SILVA", local: "Sala 504 CAP" },
                            "08:50 - 09:40": { code: "IFI0325", name: "FÍSICA III", teacher: "DANIEL LOPO DA SILVA", local: "Sala 504 CAP" },
                            "13:10 - 14:00": { code: "IME0356", name: "CÁLCULO 2A", teacher: "MAYK JOAQUIM DOS SANTOS", local: "Sala 208 - FCT" },
                            "14:00 - 14:50": { code: "IME0356", name: "CÁLCULO 2A", teacher: "MAYK JOAQUIM DOS SANTOS", local: "Sala 208 - FCT" },
                            "14:50 - 15:40": { code: "CIT0100", name: "TECNOLOGIA AQUAVIÁRIA", teacher: "MATHEUS SILVA OLIVEIRA", local: "Sala 308 - FCT" },
                            "16:00 - 16:50": { code: "CIT0100", name: "TECNOLOGIA AQUAVIÁRIA", teacher: "MATHEUS SILVA OLIVEIRA", local: "Sala 308 - FCT" }
                        }
                    }
                },
                
                {
                    id: "student_2",
                    name: "José Gomes de Souza Lima",
                    matricula: "202405289",
                    curso: "Engenharia de Transportes",
                    vinculo: "REGULAR",
                    cidade: "Aparecida de Goiânia",
                    codigoVerificacao: "35e45ef08f",
                    courses: [
                        { code: "CIT0099", name: "ANÁLISE DE INVESTIMENTO EM TRANSPORTES", teacher: "MATHEUS SILVA OLIVEIRA", local: "Sala 504 - FCT, Campus Aparecida", schedule: "Qui 13:10 - 16:50" },
                        { code: "CIT0109", name: "ASPECTOS ORGANIZACIONAIS E JURÍDICOS DOS TRANSPORTES", teacher: "MARCELO BARBOSA CESAR", local: "SALA 507 - FCT", schedule: "Ter 13:10 - 16:50" },
                        { code: "CIT0097", name: "ENGENHARIA DE TRÁFEGO 1", teacher: "RONNY MARCELO ALIAGA MEDRANO", local: "Lab. Desenvolvimento em Transportes (LDT)", schedule: "Qua 08:00 - 11:40" },
                        { code: "IFI0327", name: "FÍSICA EXPERIMENTAL II", teacher: "HERMINIA VERIDIANA DOS SANTOS PESSONI E SILVA", local: "Sala 203 IF-1", schedule: "Qui 08:00 - 09:40" },
                        { code: "IFI0325", name: "FÍSICA III", teacher: "DANIEL LOPO DA SILVA", local: "Sala 504 CAP", schedule: "Ter/Sex 08:00 - 09:40" },
                        { code: "CIT0557", name: "INTRODUÇÃO À INTELIGÊNCIA ARTIFICIAL GENERATIVA", teacher: "MARCOS PAULINO RORIZ JUNIOR", local: "Presencial UFG Aparecida - Sala 303 (Lab.Inf)", schedule: "Seg/Ter 10:00 - 11:40" },
                        { code: "CIT0505", name: "MATERIAIS DE CONSTRUÇÃO", teacher: "GEORGE WILTON ALBUQUERQUE RANGEL", local: "Sala 308 - FCT, Campus Aparecida", schedule: "Qua 13:10 - 14:50" },
                        { code: "FAL1806", name: "PORTUGUÊS BÁSICO B", teacher: "ALLICE TOLEDO LIMA DA SILVEIRA", local: "Samambaia", schedule: "A definir" },
                        { code: "CIT0100", name: "TECNOLOGIA AQUAVIÁRIA", teacher: "MATHEUS SILVA OLIVEIRA", local: "Sala 308 - FCT, Campus Aparecida", schedule: "Sex 14:50 - 16:50" },
                        { code: "CIT0101", name: "TECNOLOGIA FERROVIÁRIA", teacher: "GEORGE WILTON ALBUQUERQUE RANGEL", local: "Sala 308 - FCT, Campus Aparecida", schedule: "Qua 14:50 - 16:50" },
                        { code: "CIT0330", name: "TRANSPORTES E TURISMO", teacher: "RODRIGO PINHEIRO TOFFANO PEREIRA", local: "100% EAD - Assíncrona", schedule: "EAD" }
                    ],
                    scheduleGrid: {
                        "Segunda": {
                            "10:00 - 10:50": { code: "CIT0557", name: "IA GENERATIVA", teacher: "MARCOS PAULINO RORIZ JUNIOR", local: "Sala 303 Lab.Inf" },
                            "10:50 - 11:40": { code: "CIT0557", name: "IA GENERATIVA", teacher: "MARCOS PAULINO RORIZ JUNIOR", local: "Sala 303 Lab.Inf" }
                        },
                        "Terça": {
                            "08:00 - 08:50": { code: "IFI0325", name: "FÍSICA III", teacher: "DANIEL LOPO DA SILVA", local: "Sala 504 CAP" },
                            "08:50 - 09:40": { code: "IFI0325", name: "FÍSICA III", teacher: "DANIEL LOPO DA SILVA", local: "Sala 504 CAP" },
                            "10:00 - 10:50": { code: "CIT0557", name: "IA GENERATIVA", teacher: "MARCOS PAULINO RORIZ JUNIOR", local: "Sala 303 Lab.Inf" },
                            "10:50 - 11:40": { code: "CIT0557", name: "IA GENERATIVA", teacher: "MARCOS PAULINO RORIZ JUNIOR", local: "Sala 303 Lab.Inf" },
                            "13:10 - 14:00": { code: "CIT0109", name: "ASPECTOS JURÍDICOS DOS TRANSPORTES", teacher: "MARCELO BARBOSA CESAR", local: "SALA 507 - FCT" },
                            "14:00 - 14:50": { code: "CIT0109", name: "ASPECTOS JURÍDICOS DOS TRANSPORTES", teacher: "MARCELO BARBOSA CESAR", local: "SALA 507 - FCT" },
                            "14:50 - 15:40": { code: "CIT0109", name: "ASPECTOS JURÍDICOS DOS TRANSPORTES", teacher: "MARCELO BARBOSA CESAR", local: "SALA 507 - FCT" },
                            "16:00 - 16:50": { code: "CIT0109", name: "ASPECTOS JURÍDICOS DOS TRANSPORTES", teacher: "MARCELO BARBOSA CESAR", local: "SALA 507 - FCT" }
                        },
                        "Quarta": {
                            "08:00 - 08:50": { code: "CIT0097", name: "ENGENHARIA DE TRÁFEGO 1", teacher: "RONNY MARCELO ALIAGA MEDRANO", local: "Lab. LDT" },
                            "08:50 - 09:40": { code: "CIT0097", name: "ENGENHARIA DE TRÁFEGO 1", teacher: "RONNY MARCELO ALIAGA MEDRANO", local: "Lab. LDT" },
                            "10:00 - 10:50": { code: "CIT0097", name: "ENGENHARIA DE TRÁFEGO 1", teacher: "RONNY MARCELO ALIAGA MEDRANO", local: "Lab. LDT" },
                            "10:50 - 11:40": { code: "CIT0097", name: "ENGENHARIA DE TRÁFEGO 1", teacher: "RONNY MARCELO ALIAGA MEDRANO", local: "Lab. LDT" },
                            "13:10 - 14:00": { code: "CIT0505", name: "MATERIAIS DE CONSTRUÇÃO", teacher: "GEORGE WILTON ALBUQUERQUE RANGEL", local: "Sala 308 - FCT" },
                            "14:00 - 14:50": { code: "CIT0505", name: "MATERIAIS DE CONSTRUÇÃO", teacher: "GEORGE WILTON ALBUQUERQUE RANGEL", local: "Sala 308 - FCT" },
                            "14:50 - 15:40": { code: "CIT0101", name: "TECNOLOGIA FERROVIÁRIA", teacher: "GEORGE WILTON ALBUQUERQUE RANGEL", local: "Sala 308 - FCT" },
                            "16:00 - 16:50": { code: "CIT0101", name: "TECNOLOGIA FERROVIÁRIA", teacher: "GEORGE WILTON ALBUQUERQUE RANGEL", local: "Sala 308 - FCT" }
                        },
                        "Quinta": {
                            "08:00 - 08:50": { code: "IFI0327", name: "FÍSICA EXPERIMENTAL II", teacher: "HERMINIA VERIDIANA DOS SANTOS PESSONI", local: "Sala 203 IF-1" },
                            "08:50 - 09:40": { code: "IFI0327", name: "FÍSICA EXPERIMENTAL II", teacher: "HERMINIA VERIDIANA DOS SANTOS PESSONI", local: "Sala 203 IF-1" },
                            "13:10 - 14:00": { code: "CIT0099", name: "INVESTIMENTO EM TRANSPORTES", teacher: "MATHEUS SILVA OLIVEIRA", local: "Sala 504 - FCT" },
                            "14:00 - 14:50": { code: "CIT0099", name: "INVESTIMENTO EM TRANSPORTES", teacher: "MATHEUS SILVA OLIVEIRA", local: "Sala 504 - FCT" },
                            "14:50 - 15:40": { code: "CIT0099", name: "INVESTIMENTO EM TRANSPORTES", teacher: "MATHEUS SILVA OLIVEIRA", local: "Sala 504 - FCT" },
                            "16:00 - 16:50": { code: "CIT0099", name: "INVESTIMENTO EM TRANSPORTES", teacher: "MATHEUS SILVA OLIVEIRA", local: "Sala 504 - FCT" }
                        },
                        "Sexta": {
                            "08:00 - 08:50": { code: "IFI0325", name: "FÍSICA III", teacher: "DANIEL LOPO DA SILVA", local: "Sala 504 CAP" },
                            "08:50 - 09:40": { code: "IFI0325", name: "FÍSICA III", teacher: "DANIEL LOPO DA SILVA", local: "Sala 504 CAP" },
                            "14:50 - 15:40": { code: "CIT0100", name: "TECNOLOGIA AQUAVIÁRIA", teacher: "MATHEUS SILVA OLIVEIRA", local: "Sala 308 - FCT" },
                            "16:00 - 16:50": { code: "CIT0100", name: "TECNOLOGIA AQUAVIÁRIA", teacher: "MATHEUS SILVA OLIVEIRA", local: "Sala 308 - FCT" }
                        }
                    }
                },
                
                {
                    id: "student_4",
                    name: "Kariny Lessa Cardoso",
                    matricula: "202304512",
                    curso: "Engenharia de Transportes",
                    vinculo: "REGULAR",
                    cidade: "Aparecida de Goiânia",
                    codigoVerificacao: "1e5ee11012",
                    courses: [
                        { code: "CIT0506", name: "EMPREENDEDORISMO EM TRANSPORTES / DESENHO POR COMPUTADOR", teacher: "GERSON DOS SANTOS LISBOA", local: "SALA 304 - Lab. Informática - FCT", schedule: "Ter 08:00 - 11:40" },
                        { code: "IME0377", name: "ESTATÍSTICA APLICADA", teacher: "MAYK JOAQUIM DOS SANTOS", local: "Sala FCT", schedule: "Seg/Qua 10:00 - 11:40" },
                        { code: "CIT0098", name: "LOGÍSTICA E CADEIAS DE SUPRIMENTOS / TOPOGRAFIA", teacher: "MARCELO BARBOSA CESAR", local: "Sala 304, Lab. Informática - FCT", schedule: "Seg 13:10 - 16:50" },
                        { code: "IFI0325", name: "FÍSICA III", teacher: "DANIEL LOPO DA SILVA", local: "Sala 504 CAP", schedule: "Ter/Sex 13:10 - 14:50" },
                        { code: "CIT0112", name: "AVALIAÇÃO SOCIOECONÔMICA E AMBIENTAL DE PROJETOS DE SISTEMAS DE TRANSPORTES", teacher: "RODRIGO PINHEIRO TOFFANO PEREIRA", local: "sala 505 - FCT / Aparecida", schedule: "Qua 13:10 - 14:50" },
                        { code: "CIT0507", name: "GEOPROCESSAMENTO / GEOTECNIA", teacher: "GERSON DOS SANTOS LISBOA", local: "SALA 304 - Lab. Informática - FCT", schedule: "Qui 13:10 - 16:50" },
                        { code: "CIT0387", name: "MECÂNICA DOS SÓLIDOS / TOPOGRAFIA", teacher: "GERSON DOS SANTOS LISBOA", local: "LABORATÓRIO DE INFORMÁTICA 1 - 3º ANDAR", schedule: "Sex 08:00 - 11:40" }
                    ],
                    scheduleGrid: {
                        "Segunda": {
                            "10:00 - 10:50": { code: "IME0377", name: "ESTATÍSTICA APLICADA", teacher: "MAYK JOAQUIM DOS SANTOS", local: "Sala FCT" },
                            "10:50 - 11:40": { code: "IME0377", name: "ESTATÍSTICA APLICADA", teacher: "MAYK JOAQUIM DOS SANTOS", local: "Sala FCT" },
                            "13:10 - 14:00": { code: "CIT0098", name: "LOGÍSTICA / TOPOGRAFIA", teacher: "MARCELO BARBOSA CESAR", local: "Lab. Informática 304" },
                            "14:00 - 14:50": { code: "CIT0098", name: "LOGÍSTICA / TOPOGRAFIA", teacher: "MARCELO BARBOSA CESAR", local: "Lab. Informática 304" },
                            "14:50 - 15:40": { code: "CIT0098", name: "LOGÍSTICA / TOPOGRAFIA", teacher: "MARCELO BARBOSA CESAR", local: "Lab. Informática 304" },
                            "16:00 - 16:50": { code: "CIT0098", name: "LOGÍSTICA / TOPOGRAFIA", teacher: "MARCELO BARBOSA CESAR", local: "Lab. Informática 304" }
                        },
                        "Terça": {
                            "08:00 - 08:50": { code: "CIT0506", name: "EMPREENDEDORISMO EM TRANSPORTES", teacher: "GERSON DOS SANTOS LISBOA", local: "Lab. Inf 304" },
                            "08:50 - 09:40": { code: "CIT0506", name: "EMPREENDEDORISMO EM TRANSPORTES", teacher: "GERSON DOS SANTOS LISBOA", local: "Lab. Inf 304" },
                            "10:00 - 10:50": { code: "CIT0506", name: "EMPREENDEDORISMO EM TRANSPORTES", teacher: "GERSON DOS SANTOS LISBOA", local: "Lab. Inf 304" },
                            "10:50 - 11:40": { code: "CIT0506", name: "EMPREENDEDORISMO EM TRANSPORTES", teacher: "GERSON DOS SANTOS LISBOA", local: "Lab. Inf 304" },
                            "13:10 - 14:00": { code: "IFI0325", name: "FÍSICA III", teacher: "DANIEL LOPO DA SILVA", local: "Sala 504" },
                            "14:00 - 14:50": { code: "IFI0325", name: "FÍSICA III", teacher: "DANIEL LOPO DA SILVA", local: "Sala 504" }
                        },
                        "Quarta": {
                            "10:00 - 10:50": { code: "IME0377", name: "ESTATÍSTICA APLICADA", teacher: "MAYK JOAQUIM DOS SANTOS", local: "Sala FCT" },
                            "10:50 - 11:40": { code: "IME0377", name: "ESTATÍSTICA APLICADA", teacher: "MAYK JOAQUIM DOS SANTOS", local: "Sala FCT" },
                            "13:10 - 14:00": { code: "CIT0112", name: "AVALIAÇÃO SOCIOECONÔMICA E AMBIENTAL", teacher: "RODRIGO PINHEIRO TOFFANO PEREIRA", local: "sala 505" },
                            "14:00 - 14:50": { code: "CIT0112", name: "AVALIAÇÃO SOCIOECONÔMICA E AMBIENTAL", teacher: "RODRIGO PINHEIRO TOFFANO PEREIRA", local: "sala 505" }
                        },
                        "Quinta": {
                            "13:10 - 14:00": { code: "CIT0507", name: "GEOPROCESSAMENTO", teacher: "GERSON DOS SANTOS LISBOA", local: "Lab. Informática 304" },
                            "14:00 - 14:50": { code: "CIT0507", name: "GEOPROCESSAMENTO", teacher: "GERSON DOS SANTOS LISBOA", local: "Lab. Informática 304" },
                            "14:50 - 15:40": { code: "CIT0507", name: "GEOPROCESSAMENTO", teacher: "GERSON DOS SANTOS LISBOA", local: "Lab. Informática 304" },
                            "16:00 - 16:50": { code: "CIT0507", name: "GEOPROCESSAMENTO", teacher: "GERSON DOS SANTOS LISBOA", local: "Lab. Informática 304" }
                        },
                        "Sexta": {
                            "08:00 - 08:50": { code: "CIT0387", name: "TOPOGRAFIA / MECÂNICA DOS SÓLIDOS", teacher: "GERSON DOS SANTOS LISBOA", local: "Lab. Inf 1 - 3º Andar" },
                            "08:50 - 09:40": { code: "CIT0387", name: "TOPOGRAFIA / MECÂNICA DOS SÓLIDOS", teacher: "GERSON DOS SANTOS LISBOA", local: "Lab. Inf 1 - 3º Andar" },
                            "10:00 - 10:50": { code: "CIT0387", name: "TOPOGRAFIA / MECÂNICA DOS SÓLIDOS", teacher: "GERSON DOS SANTOS LISBOA", local: "Lab. Inf 1 - 3º Andar" },
                            "10:50 - 11:40": { code: "CIT0387", name: "TOPOGRAFIA / MECÂNICA DOS SÓLIDOS", teacher: "GERSON DOS SANTOS LISBOA", local: "Lab. Inf 1 - 3º Andar" },
                            "13:10 - 14:00": { code: "IFI0325", name: "FÍSICA III", teacher: "DANIEL LOPO DA SILVA", local: "Sala 504" },
                            "14:00 - 14:50": { code: "IFI0325", name: "FÍSICA III", teacher: "DANIEL LOPO DA SILVA", local: "Sala 504" }
                        }
                    }
                },
                
                {
                    id: "student_5",
                    name: "Maciane Favacho Barros",
                    matricula: "202409831",
                    curso: "Engenharia de Transportes",
                    vinculo: "REGULAR",
                    cidade: "Aparecida de Goiânia",
                    codigoVerificacao: "4ad0be0e30",
                    courses: [
                        { code: "CIT0361", name: "FUNDAMENTOS DE CONTABILIDADE / QUÍMICA", teacher: "VINICIUS DE FARIA PAULA", local: "108, FCT, CAP, Aparecida", schedule: "Sex 08:00 - 09:40" },
                        { code: "IFI0203", name: "FÍSICA I", teacher: "Docente FCT", local: "Sala 201 IF", schedule: "Ter/Sex 10:00 - 11:40" },
                        { code: "CIT0362", name: "GESTÃO DE PROJETOS / ÁLGEBRA LINEAR", teacher: "ARINEIA NOGUEIRA DE ASSIS", local: "503, FCT, CAP, Aparecida", schedule: "Qua 10:00 - 11:40" },
                        { code: "CIT0162", name: "GESTÃO DE CUSTOS / CÁLCULO 1", teacher: "VINICIUS DE FARIA PAULA", local: "506, FCT, CAP, Aparecida", schedule: "Qui 13:10 - 16:50" },
                        { code: "IME0378", name: "CÁLCULO 2B", teacher: "MAYK JOAQUIM DOS SANTOS", local: "Sala FCT", schedule: "Qua/Sex 14:50 - 16:50" },
                        { code: "IFI0326", name: "FÍSICA EXPERIMENTAL I", teacher: "Docente FCT", local: "Lab. Física", schedule: "Ter 16:50 - 18:30" }
                    ],
                    scheduleGrid: {
                        "Terça": {
                            "10:00 - 10:50": { code: "IFI0203", name: "FÍSICA I", teacher: "Docente FCT", local: "Sala 201 IF" },
                            "10:50 - 11:40": { code: "IFI0203", name: "FÍSICA I", teacher: "Docente FCT", local: "Sala 201 IF" },
                            "16:50 - 17:40": { code: "IFI0326", name: "FÍSICA EXPERIMENTAL I", teacher: "Docente FCT", local: "Lab. Física" },
                            "17:40 - 18:30": { code: "IFI0326", name: "FÍSICA EXPERIMENTAL I", teacher: "Docente FCT", local: "Lab. Física" }
                        },
                        "Quarta": {
                            "10:00 - 10:50": { code: "CIT0362", name: "GESTÃO DE PROJETOS", teacher: "ARINEIA NOGUEIRA DE ASSIS", local: "503, FCT" },
                            "10:50 - 11:40": { code: "CIT0362", name: "GESTÃO DE PROJETOS", teacher: "ARINEIA NOGUEIRA DE ASSIS", local: "503, FCT" },
                            "14:50 - 15:40": { code: "IME0378", name: "CÁLCULO 2B", teacher: "MAYK JOAQUIM DOS SANTOS", local: "Sala FCT" },
                            "16:00 - 16:50": { code: "IME0378", name: "CÁLCULO 2B", teacher: "MAYK JOAQUIM DOS SANTOS", local: "Sala FCT" }
                        },
                        "Quinta": {
                            "13:10 - 14:00": { code: "CIT0162", name: "GESTÃO DE CUSTOS / CÁLCULO 1", teacher: "VINICIUS DE FARIA PAULA", local: "506, FCT" },
                            "14:00 - 14:50": { code: "CIT0162", name: "GESTÃO DE CUSTOS / CÁLCULO 1", teacher: "VINICIUS DE FARIA PAULA", local: "506, FCT" },
                            "14:50 - 15:40": { code: "CIT0162", name: "GESTÃO DE CUSTOS / CÁLCULO 1", teacher: "VINICIUS DE FARIA PAULA", local: "506, FCT" },
                            "16:00 - 16:50": { code: "CIT0162", name: "GESTÃO DE CUSTOS / CÁLCULO 1", teacher: "VINICIUS DE FARIA PAULA", local: "506, FCT" }
                        },
                        "Sexta": {
                            "08:00 - 08:50": { code: "CIT0361", name: "FUNDAMENTOS DE CONTABILIDADE", teacher: "VINICIUS DE FARIA PAULA", local: "108, FCT" },
                            "08:50 - 09:40": { code: "CIT0361", name: "FUNDAMENTOS DE CONTABILIDADE", teacher: "VINICIUS DE FARIA PAULA", local: "108, FCT" },
                            "10:00 - 10:50": { code: "IFI0203", name: "FÍSICA I", teacher: "Docente FCT", local: "Sala 201 IF" },
                            "10:50 - 11:40": { code: "IFI0203", name: "FÍSICA I", teacher: "Docente FCT", local: "Sala 201 IF" },
                            "14:50 - 15:40": { code: "IME0378", name: "CÁLCULO 2B", teacher: "MAYK JOAQUIM DOS SANTOS", local: "Sala FCT" },
                            "16:00 - 16:50": { code: "IME0378", name: "CÁLCULO 2B", teacher: "MAYK JOAQUIM DOS SANTOS", local: "Sala FCT" }
                        }
                    }
                },

                {
                    id: "student_7",
                    name: "Rafael Augusto de Souza",
                    matricula: "202401102",
                    curso: "Engenharia de Transportes",
                    vinculo: "REGULAR",
                    cidade: "Aparecida de Goiânia",
                    codigoVerificacao: "7c2ae910b8",
                    courses: [
                        { code: "CIT0097", name: "ENGENHARIA DE TRÁFEGO 1", teacher: "RONNY MARCELO ALIAGA MEDRANO", local: "Lab. LDT", schedule: "Qua 08:00 - 11:40" },
                        { code: "CIT0505", name: "MATERIAIS DE CONSTRUÇÃO", teacher: "GEORGE WILTON ALBUQUERQUE RANGEL", local: "Sala 308 - FCT", schedule: "Qua 13:10 - 14:50" },
                        { code: "CIT0101", name: "TECNOLOGIA FERROVIÁRIA", teacher: "GEORGE WILTON ALBUQUERQUE RANGEL", local: "Sala 308 - FCT", schedule: "Qua 14:50 - 16:50" },
                        { code: "CIT0099", name: "ANÁLISE DE INVESTIMENTO EM TRANSPORTES", teacher: "MATHEUS SILVA OLIVEIRA", local: "Sala 504 - FCT", schedule: "Qui 13:10 - 16:50" },
                        { code: "CIT0100", name: "TECNOLOGIA AQUAVIÁRIA", teacher: "MATHEUS SILVA OLIVEIRA", local: "Sala 308 - FCT", schedule: "Sex 14:50 - 16:50" }
                    ],
                    scheduleGrid: {
                        "Quarta": {
                            "08:00 - 08:50": { code: "CIT0097", name: "ENGENHARIA DE TRÁFEGO 1", teacher: "RONNY MARCELO ALIAGA MEDRANO", local: "Lab. LDT" },
                            "08:50 - 09:40": { code: "CIT0097", name: "ENGENHARIA DE TRÁFEGO 1", teacher: "RONNY MARCELO ALIAGA MEDRANO", local: "Lab. LDT" },
                            "10:00 - 10:50": { code: "CIT0097", name: "ENGENHARIA DE TRÁFEGO 1", teacher: "RONNY MARCELO ALIAGA MEDRANO", local: "Lab. LDT" },
                            "10:50 - 11:40": { code: "CIT0097", name: "ENGENHARIA DE TRÁFEGO 1", teacher: "RONNY MARCELO ALIAGA MEDRANO", local: "Lab. LDT" },
                            "13:10 - 14:00": { code: "CIT0505", name: "MATERIAIS DE CONSTRUÇÃO", teacher: "GEORGE WILTON ALBUQUERQUE RANGEL", local: "Sala 308" },
                            "14:00 - 14:50": { code: "CIT0505", name: "MATERIAIS DE CONSTRUÇÃO", teacher: "GEORGE WILTON ALBUQUERQUE RANGEL", local: "Sala 308" },
                            "14:50 - 15:40": { code: "CIT0101", name: "TECNOLOGIA FERROVIÁRIA", teacher: "GEORGE WILTON ALBUQUERQUE RANGEL", local: "Sala 308" },
                            "16:00 - 16:50": { code: "CIT0101", name: "TECNOLOGIA FERROVIÁRIA", teacher: "GEORGE WILTON ALBUQUERQUE RANGEL", local: "Sala 308" }
                        },
                        "Quinta": {
                            "13:10 - 14:00": { code: "CIT0099", name: "INVESTIMENTO EM TRANSPORTES", teacher: "MATHEUS SILVA OLIVEIRA", local: "Sala 504" },
                            "14:00 - 14:50": { code: "CIT0099", name: "INVESTIMENTO EM TRANSPORTES", teacher: "MATHEUS SILVA OLIVEIRA", local: "Sala 504" },
                            "14:50 - 15:40": { code: "CIT0099", name: "INVESTIMENTO EM TRANSPORTES", teacher: "MATHEUS SILVA OLIVEIRA", local: "Sala 504" },
                            "16:00 - 16:50": { code: "CIT0099", name: "INVESTIMENTO EM TRANSPORTES", teacher: "MATHEUS SILVA OLIVEIRA", local: "Sala 504" }
                        },
                        "Sexta": {
                            "14:50 - 15:40": { code: "CIT0100", name: "TECNOLOGIA AQUAVIÁRIA", teacher: "MATHEUS SILVA OLIVEIRA", local: "Sala 308" },
                            "16:00 - 16:50": { code: "CIT0100", name: "TECNOLOGIA AQUAVIÁRIA", teacher: "MATHEUS SILVA OLIVEIRA", local: "Sala 308" }
                        }
                    }
                },

                {
                    id: "student_6",
                    name: "Rennan Cavalcante Guevara",
                    matricula: "202203696",
                    curso: "Engenharia de Transportes",
                    vinculo: "REGULAR",
                    cidade: "Aparecida de Goiânia",
                    codigoVerificacao: "3e91d08b61",
                    courses: [
                        { code: "CIT0109", name: "ASPECTOS ORGANIZACIONAIS E JURÍDICOS DOS TRANSPORTES", teacher: "MARCELO BARBOSA CESAR", local: "SALA 507 - FCT", schedule: "Ter 13:10 - 16:50" },
                        { code: "CIT0097", name: "ENGENHARIA DE TRÁFEGO 1", teacher: "RONNY MARCELO ALIAGA MEDRANO", local: "Lab. Desenvolvimento em Transportes (LDT)", schedule: "Qua 08:00 - 11:40" },
                        { code: "IFI0325", name: "FÍSICA III", teacher: "DANIEL LOPO DA SILVA", local: "208 CAP", schedule: "Ter/Sex 08:00 - 09:40" },
                        { code: "INF0111", name: "INTRODUÇÃO À COMPUTAÇÃO", teacher: "LEANDRO LUIS GALDINO DE OLIVEIRA", local: "3N45, 154 INF / 5N45, 104 CAA CAS Goiânia", schedule: "Ter/Qui 20:30 - 22:00" },
                        { code: "CIT0557", name: "INTRODUÇÃO À INTELIGÊNCIA ARTIFICIAL GENERATIVA", teacher: "MARCOS PAULINO RORIZ JUNIOR", local: "Presencial na UFG Aparecida de Goiânia - Sala 303 (Lab.Inf)", schedule: "Seg/Ter 10:00 - 11:40" },
                        { code: "CIT0505", name: "MATERIAIS DE CONSTRUÇÃO", teacher: "GEORGE WILTON ALBUQUERQUE RANGEL", local: "Sala 308 - FCT, Campus Aparecida de Goiânia", schedule: "Qua 13:10 - 14:50" },
                        { code: "FAL1806", name: "PORTUGUÊS BÁSICO B", teacher: "ALLICE TOLEDO LIMA DA SILVEIRA", local: "SAMAMBAIA", schedule: "A definir" },
                        { code: "CIT0137", name: "PROJETO DE TERMINAIS DE PASSAGEIROS", teacher: "RODRIGO PINHEIRO TOFFANO PEREIRA", local: "Sala de Desenho - 109 - FCT/Aparecida", schedule: "Qui 13:10 - 16:50" },
                        { code: "CIT0101", name: "TECNOLOGIA FERROVIÁRIA", teacher: "GEORGE WILTON ALBUQUERQUE RANGEL", local: "Sala 308 - FCT, Campus Aparecida de Goiânia", schedule: "Qua 14:50 - 16:50" }
                    ],
                    scheduleGrid: {
                        "Segunda": {
                            "10:00 - 10:50": { code: "CIT0557", name: "IA GENERATIVA", teacher: "MARCOS PAULINO RORIZ JUNIOR", local: "Sala 303 Lab.Inf" },
                            "10:50 - 11:40": { code: "CIT0557", name: "IA GENERATIVA", teacher: "MARCOS PAULINO RORIZ JUNIOR", local: "Sala 303 Lab.Inf" }
                        },
                        "Terça": {
                            "08:00 - 08:50": { code: "IFI0325", name: "FÍSICA III", teacher: "DANIEL LOPO DA SILVA", local: "Sala 208 CAP" },
                            "08:50 - 09:40": { code: "IFI0325", name: "FÍSICA III", teacher: "DANIEL LOPO DA SILVA", local: "Sala 208 CAP" },
                            "10:00 - 10:50": { code: "CIT0557", name: "IA GENERATIVA", teacher: "MARCOS PAULINO RORIZ JUNIOR", local: "Sala 303 Lab.Inf" },
                            "10:50 - 11:40": { code: "CIT0557", name: "IA GENERATIVA", teacher: "MARCOS PAULINO RORIZ JUNIOR", local: "Sala 303 Lab.Inf" },
                            "13:10 - 14:00": { code: "CIT0109", name: "ASPECTOS JURÍDICOS DOS TRANSPORTES", teacher: "MARCELO BARBOSA CESAR", local: "SALA 507 - FCT" },
                            "14:00 - 14:50": { code: "CIT0109", name: "ASPECTOS JURÍDICOS DOS TRANSPORTES", teacher: "MARCELO BARBOSA CESAR", local: "SALA 507 - FCT" },
                            "14:50 - 15:40": { code: "CIT0109", name: "ASPECTOS JURÍDICOS DOS TRANSPORTES", teacher: "MARCELO BARBOSA CESAR", local: "SALA 507 - FCT" },
                            "16:00 - 16:50": { code: "CIT0109", name: "ASPECTOS JURÍDICOS DOS TRANSPORTES", teacher: "MARCELO BARBOSA CESAR", local: "SALA 507 - FCT" }
                        },
                        "Quarta": {
                            "08:00 - 08:50": { code: "CIT0097", name: "ENGENHARIA DE TRÁFEGO 1", teacher: "RONNY MARCELO ALIAGA MEDRANO", local: "Lab. LDT" },
                            "08:50 - 09:40": { code: "CIT0097", name: "ENGENHARIA DE TRÁFEGO 1", teacher: "RONNY MARCELO ALIAGA MEDRANO", local: "Lab. LDT" },
                            "10:00 - 10:50": { code: "CIT0097", name: "ENGENHARIA DE TRÁFEGO 1", teacher: "RONNY MARCELO ALIAGA MEDRANO", local: "Lab. LDT" },
                            "10:50 - 11:40": { code: "CIT0097", name: "ENGENHARIA DE TRÁFEGO 1", teacher: "RONNY MARCELO ALIAGA MEDRANO", local: "Lab. LDT" },
                            "13:10 - 14:00": { code: "CIT0505", name: "MATERIAIS DE CONSTRUÇÃO", teacher: "GEORGE WILTON ALBUQUERQUE RANGEL", local: "Sala 308 - FCT" },
                            "14:00 - 14:50": { code: "CIT0505", name: "MATERIAIS DE CONSTRUÇÃO", teacher: "GEORGE WILTON ALBUQUERQUE RANGEL", local: "Sala 308 - FCT" },
                            "14:50 - 15:40": { code: "CIT0101", name: "TECNOLOGIA FERROVIÁRIA", teacher: "GEORGE WILTON ALBUQUERQUE RANGEL", local: "Sala 308 - FCT" },
                            "16:00 - 16:50": { code: "CIT0101", name: "TECNOLOGIA FERROVIÁRIA", teacher: "GEORGE WILTON ALBUQUERQUE RANGEL", local: "Sala 308 - FCT" }
                        },
                        "Quinta": {
                            "13:10 - 14:00": { code: "CIT0137", name: "PROJETO DE TERMINAIS", teacher: "RODRIGO PINHEIRO TOFFANO PEREIRA", local: "Sala de Desenho - 109" },
                            "14:00 - 14:50": { code: "CIT0137", name: "PROJETO DE TERMINAIS", teacher: "RODRIGO PINHEIRO TOFFANO PEREIRA", local: "Sala de Desenho - 109" },
                            "14:50 - 15:40": { code: "CIT0137", name: "PROJETO DE TERMINAIS", teacher: "RODRIGO PINHEIRO TOFFANO PEREIRA", local: "Sala de Desenho - 109" },
                            "16:00 - 16:50": { code: "CIT0137", name: "PROJETO DE TERMINAIS", teacher: "RODRIGO PINHEIRO TOFFANO PEREIRA", local: "Sala de Desenho - 109" }
                        },
                        "Sexta": {
                            "08:00 - 08:50": { code: "IFI0325", name: "FÍSICA III", teacher: "DANIEL LOPO DA SILVA", local: "Sala 208 CAP" },
                            "08:50 - 09:40": { code: "IFI0325", name: "FÍSICA III", teacher: "DANIEL LOPO DA SILVA", local: "Sala 208 CAP" }
                        }
                    }
                }
            ]
        }
    },
    
    // Master time slots
    timeSlots: [
        "08:00 - 08:50",
        "08:50 - 09:40",
        "10:00 - 10:50",
        "10:50 - 11:40",
        "11:40 - 12:30",
        "13:10 - 14:00",
        "14:00 - 14:50",
        "14:50 - 15:40",
        "16:00 - 16:50",
        "16:50 - 17:40",
        "17:40 - 18:30"
    ],
    
    // Master slot definitions with exact boundaries and shifts
    slotDefinitions: [
        { id: "08:00 - 08:50", shift: "MANHA", startMin: 480, endMin: 530 },
        { id: "08:50 - 09:40", shift: "MANHA", startMin: 530, endMin: 580 },
        { id: "10:00 - 10:50", shift: "MANHA", startMin: 600, endMin: 650 },
        { id: "10:50 - 11:40", shift: "MANHA", startMin: 650, endMin: 700 },
        { id: "11:40 - 12:30", shift: "MANHA", startMin: 700, endMin: 750 },
        { id: "13:10 - 14:00", shift: "TARDE", startMin: 790, endMin: 840 },
        { id: "14:00 - 14:50", shift: "TARDE", startMin: 840, endMin: 890 },
        { id: "14:50 - 15:40", shift: "TARDE", startMin: 890, endMin: 940 },
        { id: "16:00 - 16:50", shift: "TARDE", startMin: 960, endMin: 1010 },
        { id: "16:50 - 17:40", shift: "TARDE", startMin: 1010, endMin: 1060 },
        { id: "17:40 - 18:30", shift: "TARDE", startMin: 1060, endMin: 1110 }
    ],

    days: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"],

    // Helper functions for Semester Management
    getAvailableSemesters() {
        return Object.keys(this.semesters).map(key => ({
            key: key,
            label: this.semesters[key].label || key
        }));
    },

    getStudents(semesterKey = this.activeSemester) {
        const rawList = this.semesters[semesterKey] ? this.semesters[semesterKey].students : [];
        return [...rawList].sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'));
    },

    getStudentById(id, semesterKey = this.activeSemester) {
        const students = this.getStudents(semesterKey);
        return students.find(s => s.id === id);
    },

    isSlotFree(student, day, slot) {
        if (!student || !student.scheduleGrid || !student.scheduleGrid[day]) return true;
        return !student.scheduleGrid[day][slot];
    },

    addSemester(key, label, studentsArray = []) {
        this.semesters[key] = {
            label: label,
            students: studentsArray
        };
    },

    minToTime(m) {
        const h = Math.floor(m / 60).toString().padStart(2, '0');
        const min = (m % 60).toString().padStart(2, '0');
        return `${h}:${min}`;
    },

    formatDuration(minutes) {
        if (minutes < 60) return `${minutes} min`;
        const h = Math.floor(minutes / 60);
        const m = minutes % 60;
        return m === 0 ? `${h}h00` : `${h}h${m.toString().padStart(2, '0')} min`;
    },

    findMeetingSuggestions(selectedStudents, durationMinutes, shiftFilter = "ALL") {
        if (!selectedStudents || selectedStudents.length === 0) return [];
        const days = this.days;
        const suggestions = [];

        days.forEach(day => {
            ["MANHA", "TARDE"].forEach(shift => {
                if (shiftFilter === "MANHA" && shift !== "MANHA") return;
                if (shiftFilter === "TARDE" && shift !== "TARDE") return;

                const shiftSlots = this.slotDefinitions.filter(s => s.shift === shift);
                
                let currentBlock = null;
                const freeBlocks = [];

                shiftSlots.forEach(s => {
                    const isFree = selectedStudents.every(st => this.isSlotFree(st, day, s.id));
                    if (isFree) {
                        if (!currentBlock) {
                            currentBlock = { startMin: s.startMin, endMin: s.endMin, slots: [s] };
                        } else {
                            currentBlock.endMin = s.endMin;
                            currentBlock.slots.push(s);
                        }
                    } else {
                        if (currentBlock) {
                            freeBlocks.push(currentBlock);
                            currentBlock = null;
                        }
                    }
                });
                if (currentBlock) freeBlocks.push(currentBlock);

                freeBlocks.forEach(block => {
                    const blockDuration = block.endMin - block.startMin;
                    if (blockDuration >= durationMinutes) {
                        block.slots.forEach(s => {
                            if (s.startMin + durationMinutes <= block.endMin) {
                                suggestions.push({
                                    day: day,
                                    slot: s.id,
                                    startTime: this.minToTime(s.startMin),
                                    endTime: this.minToTime(s.startMin + durationMinutes),
                                    windowStart: this.minToTime(block.startMin),
                                    windowEnd: this.minToTime(block.endMin),
                                    windowDuration: blockDuration,
                                    durationMinutes: durationMinutes
                                });
                            }
                        });
                    }
                });
            });
        });

        const dayOrder = { "Segunda": 1, "Terça": 2, "Quarta": 3, "Quinta": 4, "Sexta": 5 };
        suggestions.sort((a, b) => {
            const dayDiff = (dayOrder[a.day] || 99) - (dayOrder[b.day] || 99);
            if (dayDiff !== 0) return dayDiff;
            return a.startTime.localeCompare(b.startTime);
        });

        return suggestions;
    }
};

/**
 * Função utilitária global para preencher dinamicamente todos os seletores de semestre nas telas.
 */
function populateSemesterSelectors(selectElementId = "semesterSelect") {
    const select = document.getElementById(selectElementId);
    if (!select) return;

    select.innerHTML = "";
    const semesters = Database.getAvailableSemesters();

    semesters.forEach(sem => {
        const opt = document.createElement("option");
        opt.value = sem.key;
        opt.textContent = sem.label;
        if (sem.key === Database.activeSemester) {
            opt.selected = true;
        }
        select.appendChild(opt);
    });
}
