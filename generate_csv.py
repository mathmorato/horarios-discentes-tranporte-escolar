import csv

# Student schedules and data for semester 2026.2 sorted alphabetically
students_data = [
    {
        "name": "Ana Paula Ferreira da Silva",
        "matricula": "202203672",
        "courses": [
            {"code": "EEC0096", "name": "FENÔMENOS DE TRANSPORTE", "teacher": "DANILO DUARTE COSTA E SILVA", "local": "CAE-EMC-202", "schedule": "Qui 08:50 - 10:50"},
            {"code": "IFI0325", "name": "FÍSICA III", "teacher": "DANIEL LOPO DA SILVA", "local": "Sala 504 CAP", "schedule": "Ter/Sex 13:10 - 14:50"},
            {"code": "CIT0137", "name": "PROJETO DE TERMINAIS DE PASSAGEIROS", "teacher": "RODRIGO PINHEIRO TOFFANO PEREIRA", "local": "Sala de Desenho - 109 - FCT/Aparecida", "schedule": "Qui 13:10 - 16:50"},
            {"code": "CIT0111", "name": "SEGURANÇA DOS SISTEMAS DE TRANSPORTE", "teacher": "CINTIA ISABEL DE CAMPOS ROQUE GUERRERO", "local": "Sala 506 - FCT/Aparecida", "schedule": "Qua 08:00 - 11:40"},
            {"code": "CIT0118", "name": "TRABALHO DE CONCLUSÃO DE CURSO 2", "teacher": "POLIANA DE SOUSA LEITE", "local": "A definir", "schedule": "Qua/Qui 11:40 - 12:30"},
            {"code": "CIT0540", "name": "TRÂNSITO E EDUCAÇÃO", "teacher": "CINTIA ISABEL DE CAMPOS ROQUE GUERRERO", "local": "Mini-auditório - Sala 202 (2º andar FCT)", "schedule": "Sex 08:00 - 11:40"},
            {"code": "CIT0330", "name": "TRANSPORTES E TURISMO", "teacher": "RODRIGO PINHEIRO TOFFANO PEREIRA", "local": "100% EAD - 100% Assíncrona", "schedule": "EAD"}
        ]
    },
    {
        "name": "Guilherme Junqueira Serafim",
        "matricula": "202301988",
        "courses": [
            {"code": "CIT0099", "name": "ANÁLISE DE INVESTIMENTO EM TRANSPORTES", "teacher": "MATHEUS SILVA OLIVEIRA", "local": "Sala 504 - FCT", "schedule": "Qui 13:10 - 16:50"},
            {"code": "IME0356", "name": "CÁLCULO 2A", "teacher": "MAYK JOAQUIM DOS SANTOS", "local": "Sala 208 - FCT, CAP", "schedule": "Seg/Qua/Sex 13:10 - 14:50"},
            {"code": "CIT0097", "name": "ENGENHARIA DE TRÁFEGO 1", "teacher": "RONNY MARCELO ALIAGA MEDRANO", "local": "Lab. Desenvolvimento em Transportes (LDT)", "schedule": "Qua 08:00 - 11:40"},
            {"code": "IFI0327", "name": "FÍSICA EXPERIMENTAL II", "teacher": "HERMINIA VERIDIANA DOS SANTOS PESSONI E SILVA", "local": "Sala 203 IF-1", "schedule": "Qui 08:00 - 09:40"},
            {"code": "IFI0325", "name": "FÍSICA III", "teacher": "DANIEL LOPO DA SILVA", "local": "Sala 504 CAP", "schedule": "Ter/Sex 08:00 - 09:40"},
            {"code": "CIT0557", "name": "INTRODUÇÃO À INTELIGÊNCIA ARTIFICIAL GENERATIVA", "teacher": "MARCOS PAULINO RORIZ JUNIOR", "local": "Presencial UFG Aparecida - Sala 303 (Lab.Inf)", "schedule": "Seg/Ter 10:00 - 11:40"},
            {"code": "CIT0100", "name": "TECNOLOGIA AQUAVIÁRIA", "teacher": "MATHEUS SILVA OLIVEIRA", "local": "Sala 308 - FCT", "schedule": "Sex 14:50 - 16:50"},
            {"code": "CIT0101", "name": "TECNOLOGIA FERROVIÁRIA", "teacher": "GEORGE WILTON ALBUQUERQUE RANGEL", "local": "Sala 308 - FCT", "schedule": "Qua 14:50 - 16:50"},
            {"code": "CIT0041", "name": "TEORIA E TÉCNICA DE PLANEJAMENTO INTEGRADO EM TRANSPORTES", "teacher": "CRISTIANO FARIAS ALMEIDA", "local": "SALA 505 - FCT/Aparecida", "schedule": "Ter 14:50 - 16:50"}
        ]
    },
    {
        "name": "José Gomes de Souza Lima",
        "matricula": "202405289",
        "courses": [
            {"code": "CIT0099", "name": "ANÁLISE DE INVESTIMENTO EM TRANSPORTES", "teacher": "MATHEUS SILVA OLIVEIRA", "local": "Sala 504 - FCT, Campus Aparecida", "schedule": "Qui 13:10 - 16:50"},
            {"code": "CIT0109", "name": "ASPECTOS ORGANIZACIONAIS E JURÍDICOS DOS TRANSPORTES", "teacher": "MARCELO BARBOSA CESAR", "local": "SALA 507 - FCT", "schedule": "Ter 13:10 - 16:50"},
            {"code": "CIT0097", "name": "ENGENHARIA DE TRÁFEGO 1", "teacher": "RONNY MARCELO ALIAGA MEDRANO", "local": "Lab. Desenvolvimento em Transportes (LDT)", "schedule": "Qua 08:00 - 11:40"},
            {"code": "IFI0327", "name": "FÍSICA EXPERIMENTAL II", "teacher": "HERMINIA VERIDIANA DOS SANTOS PESSONI E SILVA", "local": "Sala 203 IF-1", "schedule": "Qui 08:00 - 09:40"},
            {"code": "IFI0325", "name": "FÍSICA III", "teacher": "DANIEL LOPO DA SILVA", "local": "Sala 504 CAP", "schedule": "Ter/Sex 08:00 - 09:40"},
            {"code": "CIT0557", "name": "INTRODUÇÃO À INTELIGÊNCIA ARTIFICIAL GENERATIVA", "teacher": "MARCOS PAULINO RORIZ JUNIOR", "local": "Presencial UFG Aparecida - Sala 303 (Lab.Inf)", "schedule": "Seg/Ter 10:00 - 11:40"},
            {"code": "CIT0505", "name": "MATERIAIS DE CONSTRUÇÃO", "teacher": "GEORGE WILTON ALBUQUERQUE RANGEL", "local": "Sala 308 - FCT, Campus Aparecida", "schedule": "Qua 13:10 - 14:50"},
            {"code": "FAL1806", "name": "PORTUGUÊS BÁSICO B", "teacher": "ALLICE TOLEDO LIMA DA SILVEIRA", "local": "Samambaia", "schedule": "A definir"},
            {"code": "CIT0100", "name": "TECNOLOGIA AQUAVIÁRIA", "teacher": "MATHEUS SILVA OLIVEIRA", "local": "Sala 308 - FCT, Campus Aparecida", "schedule": "Sex 14:50 - 16:50"},
            {"code": "CIT0101", "name": "TECNOLOGIA FERROVIÁRIA", "teacher": "GEORGE WILTON ALBUQUERQUE RANGEL", "local": "Sala 308 - FCT, Campus Aparecida", "schedule": "Qua 14:50 - 16:50"},
            {"code": "CIT0330", "name": "TRANSPORTES E TURISMO", "teacher": "RODRIGO PINHEIRO TOFFANO PEREIRA", "local": "100% EAD - Assíncrona", "schedule": "EAD"}
        ]
    },
    {
        "name": "Kariny Lessa Cardoso",
        "matricula": "202304512",
        "courses": [
            {"code": "CIT0506", "name": "EMPREENDEDORISMO EM TRANSPORTES / DESENHO POR COMPUTADOR", "teacher": "GERSON DOS SANTOS LISBOA", "local": "SALA 304 - Lab. Informática - FCT", "schedule": "Ter 08:00 - 11:40"},
            {"code": "IME0377", "name": "ESTATÍSTICA APLICADA", "teacher": "MAYK JOAQUIM DOS SANTOS", "local": "Sala FCT", "schedule": "Seg/Qua 10:00 - 11:40"},
            {"code": "CIT0098", "name": "LOGÍSTICA E CADEIAS DE SUPRIMENTOS / TOPOGRAFIA", "teacher": "MARCELO BARBOSA CESAR", "local": "Sala 304, Lab. Informática - FCT", "schedule": "Seg 13:10 - 16:50"},
            {"code": "IFI0325", "name": "FÍSICA III", "teacher": "DANIEL LOPO DA SILVA", "local": "Sala 504 CAP", "schedule": "Ter/Sex 13:10 - 14:50"},
            {"code": "CIT0112", "name": "AVALIAÇÃO SOCIOECONÔMICA E AMBIENTAL DE PROJETOS DE SISTEMAS DE TRANSPORTES", "teacher": "RODRIGO PINHEIRO TOFFANO PEREIRA", "local": "sala 505 - FCT / Aparecida", "schedule": "Qua 13:10 - 14:50"},
            {"code": "CIT0507", "name": "GEOPROCESSAMENTO / GEOTECNIA", "teacher": "GERSON DOS SANTOS LISBOA", "local": "SALA 304 - Lab. Informática - FCT", "schedule": "Qui 13:10 - 16:50"},
            {"code": "CIT0387", "name": "MECÂNICA DOS SÓLIDOS / TOPOGRAFIA", "teacher": "GERSON DOS SANTOS LISBOA", "local": "LABORATÓRIO DE INFORMÁTICA 1 - 3º ANDAR", "schedule": "Sex 08:00 - 11:40"}
        ]
    },
    {
        "name": "Maciane Favacho Barros",
        "matricula": "202409831",
        "courses": [
            {"code": "CIT0361", "name": "FUNDAMENTOS DE CONTABILIDADE / QUÍMICA", "teacher": "VINICIUS DE FARIA PAULA", "local": "108, FCT, CAP, Aparecida", "schedule": "Sex 08:00 - 09:40"},
            {"code": "IFI0203", "name": "FÍSICA I", "teacher": "Docente FCT", "local": "Sala 201 IF", "schedule": "Ter/Sex 10:00 - 11:40"},
            {"code": "CIT0362", "name": "GESTÃO DE PROJETOS / ÁLGEBRA LINEAR", "teacher": "ARINEIA NOGUEIRA DE ASSIS", "local": "503, FCT, CAP, Aparecida", "schedule": "Qua 10:00 - 11:40"},
            {"code": "CIT0162", "name": "GESTÃO DE CUSTOS / CÁLCULO 1", "teacher": "VINICIUS DE FARIA PAULA", "local": "506, FCT, CAP, Aparecida", "schedule": "Qui 13:10 - 16:50"},
            {"code": "IME0378", "name": "CÁLCULO 2B", "teacher": "MAYK JOAQUIM DOS SANTOS", "local": "Sala FCT", "schedule": "Qua/Sex 14:50 - 16:50"},
            {"code": "IFI0326", "name": "FÍSICA EXPERIMENTAL I", "teacher": "Docente FCT", "local": "Lab. Física", "schedule": "Ter 16:50 - 18:30"}
        ]
    },
    {
        "name": "Rafael Augusto de Souza",
        "matricula": "202401102",
        "courses": [
            {"code": "CIT0097", "name": "ENGENHARIA DE TRÁFEGO 1", "teacher": "RONNY MARCELO ALIAGA MEDRANO", "local": "Lab. LDT", "schedule": "Qua 08:00 - 11:40"},
            {"code": "CIT0505", "name": "MATERIAIS DE CONSTRUÇÃO", "teacher": "GEORGE WILTON ALBUQUERQUE RANGEL", "local": "Sala 308 - FCT", "schedule": "Qua 13:10 - 14:50"},
            {"code": "CIT0101", "name": "TECNOLOGIA FERROVIÁRIA", "teacher": "GEORGE WILTON ALBUQUERQUE RANGEL", "local": "Sala 308 - FCT", "schedule": "Qua 14:50 - 16:50"},
            {"code": "CIT0099", "name": "ANÁLISE DE INVESTIMENTO EM TRANSPORTES", "teacher": "MATHEUS SILVA OLIVEIRA", "local": "Sala 504 - FCT", "schedule": "Qui 13:10 - 16:50"},
            {"code": "CIT0100", "name": "TECNOLOGIA AQUAVIÁRIA", "teacher": "MATHEUS SILVA OLIVEIRA", "local": "Sala 308 - FCT", "schedule": "Sex 14:50 - 16:50"}
        ]
    },
    {
        "name": "Rennan Cavalcante Guevara",
        "matricula": "202203696",
        "courses": [
            {"code": "CIT0109", "name": "ASPECTOS ORGANIZACIONAIS E JURÍDICOS DOS TRANSPORTES", "teacher": "MARCELO BARBOSA CESAR", "local": "SALA 507 - FCT", "schedule": "Ter 13:10 - 16:50"},
            {"code": "CIT0097", "name": "ENGENHARIA DE TRÁFEGO 1", "teacher": "RONNY MARCELO ALIAGA MEDRANO", "local": "Lab. Desenvolvimento em Transportes (LDT)", "schedule": "Qua 08:00 - 11:40"},
            {"code": "IFI0001", "name": "FÍSICA III", "teacher": "MARCIO ADRIANO RODRIGUES SOUZA", "local": "Sala 203, CAA, CAS, Goiânia", "schedule": "Ter/Qui 08:00 - 09:40"},
            {"code": "INF0111", "name": "INTRODUÇÃO À COMPUTAÇÃO", "teacher": "LEANDRO LUIS GALDINO DE OLIVEIRA", "local": "Sala 3N45 / 104 CAA", "schedule": "Seg/Qui 20:30 - 22:00"},
            {"code": "CIT0557", "name": "INTRODUÇÃO À INTELIGÊNCIA ARTIFICIAL GENERATIVA", "teacher": "MARCOS PAULINO RORIZ JUNIOR", "local": "Presencial UFG Aparecida - Sala 303 (Lab.Inf)", "schedule": "Seg/Ter 10:00 - 11:40"},
            {"code": "CIT0505", "name": "MATERIAIS DE CONSTRUÇÃO", "teacher": "GEORGE WILTON ALBUQUERQUE RANGEL", "local": "Sala 308 - FCT, Campus Aparecida", "schedule": "Qua 13:10 - 14:50"},
            {"code": "FAL1806", "name": "PORTUGUÊS BÁSICO B", "teacher": "ALLICE TOLEDO LIMA DA SILVEIRA", "local": "Samambaia", "schedule": "A definir"},
            {"code": "CIT0137", "name": "PROJETO DE TERMINAIS DE PASSAGEIROS", "teacher": "RODRIGO PINHEIRO TOFFANO PEREIRA", "local": "Sala de Desenho - 109 - FCT/Aparecida", "schedule": "Qui 13:10 - 16:50"},
            {"code": "CIT0101", "name": "TECNOLOGIA FERROVIÁRIA", "teacher": "GEORGE WILTON ALBUQUERQUE RANGEL", "local": "Sala 308 - FCT, Campus Aparecida", "schedule": "Qua 14:50 - 16:50"}
        ]
    }
]

# Write detailed CSV
with open("horarios_alunos_detalhado.csv", "w", newline="", encoding="utf-8-sig") as f:
    writer = csv.writer(f)
    writer.writerow(["Nome do Aluno", "Matrícula", "Código Disciplina", "Nome Disciplina", "Docente", "Local", "Horário SIGAA"])
    for student in students_data:
        for course in student["courses"]:
            writer.writerow([
                student["name"],
                student["matricula"],
                course["code"],
                course["name"],
                course["teacher"],
                course["local"],
                course["schedule"]
            ])

print("CSV gerado em ordem alfabética com sucesso.")
