// Site translations. English is the default text written in the HTML; elements
// marked with data-i18n="key" are swapped for the selected language's entry.
(function () {
  var translations = {
    es: {
      'projects': 'Proyectos',
      'papers': 'Publicaciones',
      'mentorship': 'Mentoría',

      'home.affil': 'Estudiante de licenciatura, University of Southern California<br>Los Ángeles, CA<br>reyesara@usc.edu<br>',
      'home.resume': 'Currículum',
      'home.news': 'Noticias recientes',
      'home.news1': 'Septiembre de 2026: ¡Pasé a una pasantía de todo el año con el equipo de Secure Algorithms en Sandia Labs!',
      'home.news2': 'Mayo - agosto de 2026: Me uní a Sandia National Laboratories como pasante en los National Security Programs y trabajé con el Computer Science Research Institute apoyando proyectos de IA/ML que forman parte de la Genesis Mission.',
      'home.bio1': 'Soy estudiante de licenciatura en ciencias de la computación de primera generación y formo parte del CS Theory Group, con la mentoría del muy atento <a href="https://vatsalsharan.github.io/">Vatsal Sharan</a> y de los miembros de su grupo. Antes de USC, disfruté mucho trabajar con <a href="https://www.clarebaek.com/">Clare Baek</a>, Dana Saito-Stehberger y <a href="https://markwarschauer.com/">Mark Warschauer</a> en el Digital Learning Lab de la University of California, Irvine.',
      'home.bio2': 'Mis intereses abarcan el aprendizaje automático confiable desde la perspectiva de la optimización, la seguridad y la dinámica del aprendizaje. Investigo el comportamiento de los algoritmos de aprendizaje automático en entornos adversarios, propensos al ruido y con recursos limitados. Mi trabajo está motivado por el objetivo de usar herramientas de las ciencias de la computación para desarrollar soluciones a problemas sociales. Consulta breves descripciones de mis proyectos anteriores <a href="projects.html">aquí</a>.',
      'home.bio3': 'Participo activamente en organizaciones estudiantiles de USC: ocupo la presidencia de <a href="https://uscsacnas.weebly.com/">SACNAS</a>, y anteriormente estuve a cargo de la programación de <a href="https://www.colorstack.org/">Color Stack</a> y dirigí un comité de <a href="https://shpeusc.com/">SHPE</a>.',
      'home.workshop': 'Taller',
      'home.muon.desc': 'Muon permite una adquisición de habilidades más equilibrada y paralela que SGD y Adam bajo desequilibrio a nivel de tarea, medida con una nueva métrica, Skill Acquisition Lag (SAL).',
      'home.muon.talk': 'Charla invitada en el <em>Annual Machine Learning &amp; Deep Learning Workshop</em>, agosto de 2026, en Sandia National Laboratories.',
      'home.review': 'En revisión',
      'home.neuro.desc': 'Particionamiento basado en teoría espectral de grafos y balanceo de carga para optimizar un compilador neuromórfico.',
      'home.neuro.venue': 'Próximamente en ORCID',
      'home.rpp.desc': 'La construcción temprana de sentido como trabajo de diseño anticipatorio para abordar tensiones de equidad en el codiseño curricular de las RPP.',
      'home.rpp.venue': 'Enviado al Journal of Learning Sciences',
      'home.highlighted': 'Destacados',
      'home.agentic.desc': 'Apoyo en el mantenimiento de un modelo agéntico interno y desarrollo de mi propio runtime agéntico desplegado localmente.',
      'home.phenom.desc': 'Datos con ruido blanco y parches espurios en CIFAR-10 para examinar cuándo los modelos dependen en gran medida de características más simples.',
      'home.allprojects': 'Todos mis proyectos anteriores se pueden consultar <a href="projects.html">aquí</a>.',
      'home.extra': 'Extra',
      'home.brother': 'Mi hermano menor aspira a ser físico: ¡échale un vistazo a <a href="https://www.linkedin.com/in/reese-r-7a6654269/">Reese</a>!',
      'summer2026': 'Verano de 2026',
      'summer2025': 'Verano de 2025',

      'link.paper': 'Artículo',
      'link.poster': 'Póster',
      'link.video': 'Video',
      'link.slides': 'Diapositivas',
      'link.code': 'Código',
      'link.more': 'Más',

      'side.fellowships': 'Becas',
      'side.supported': 'Agradezco el apoyo de',
      'side.formerly': 'Anteriormente con el apoyo de',
      'footer.rights': 'Todos los derechos reservados.',

      'projects.pagetitle': 'Proyectos de investigación | Alex Reyes Aranda',
      'projects.title': 'Proyectos de investigación',
      'projects.intro': 'Agradezco las oportunidades y a los colaboradores que me han permitido crecer en la investigación a lo largo de los años, ¡y espero seguir ampliando mis habilidades trabajando con otras personas!',
      'projects.note': 'Los proyectos marcados con (*) tienen un artículo o informe asociado.',
      'projects.legend': 'UIR = en revisión interna*, LIA = información limitada disponible*',

      'proj.neuro': 'Optimización de compiladores neuromórficos',
      'proj.agentic': 'Modelos agénticos e infraestructura de IA',
      'proj.muon': 'Muon transforma el aprendizaje multitarea',
      'proj.phenom': 'Aprendizaje profundo fenomenológico',
      'proj.scratch': 'Evaluación automatizada profunda de proyectos de Scratch',
      'proj.rpp': 'Anticipar tensiones de diseño en alianzas entre investigación y práctica',

      'kw.neuro': 'Agrupamiento espectral de grafos, optimización',
      'kw.agentic': 'Agentes, LLM, MCP, contenedorización, Docker, runtimes',
      'kw.muon': 'Leyes de escalamiento neuronal, optimización en aprendizaje automático',
      'kw.phenom': 'Aprendizaje automático robusto, visión por computadora',
      'kw.scratch': 'Datos sintéticos, VAE generativos, programación probabilística',
      'kw.rpp': 'Educación en ciencias de la computación, desarrollo curricular, JavaScript',

      'desc.neuro': 'Investigamos métodos de optimización para un compilador neuromórfico en simulación. Fecha estimada: octubre de 2026.',
      'desc.agentic': 'Ayudé a mantener un modelo agéntico interno junto con varios investigadores del Computer Science Research Institute. Trabajé de forma práctica con la infraestructura que despliega y ejecuta sistemas de IA, incluidos contenedores, runtimes y agentes. Durante el verano, depuré errores, resolví problemas a medida que surgían y leí artículos de investigación sobre los modelos subyacentes para comprender mejor el sistema en el que trabajaba. A partir de lo aprendido, desarrollé y presenté una demostración de mi propio runtime agéntico desplegado localmente, mientras exponía mis avances en reuniones semanales.',
      'desc.muon': 'Los optimizadores sensibles al espectro, en particular Muon, muestran un escalamiento empírico más favorable que optimizadores como SGD y Adam. Trabajos previos lo explican mediante un aprendizaje más equilibrado en escenarios con etiquetas o asociaciones entrada-salida desbalanceadas. Mostramos que Muon permite una adquisición de habilidades más equilibrada en escenarios con desequilibrio a nivel de tarea. En una configuración multitarea basada en paridad dispersa, con Muon las subtareas se aprenden de forma más paralela que con otros optimizadores. Creamos la métrica Skill Acquisition Lag (SAL) para cuantificar el aprendizaje paralelo frente al secuencial. En un entorno simple de regresión lineal en contexto, la convergencia de Muon es independiente del desequilibrio tanto a nivel de tarea como de entrada, a diferencia del GD (normalizado).',
      'desc.phenom': 'Investigamos un fenómeno en el que una cantidad creciente, aunque variable, de ruido blanco parece aumentar la dependencia de un modelo de correlaciones espurias. Escribí pipelines de entrenamiento y evaluación en PyTorch para probarlo con imágenes de CIFAR-10, usando un parche como característica espuria. Sorprendentemente, los resultados de esta nueva configuración mostraron que el modelo dependía por completo del parche. Para determinar cuánto afectaba el parche al aprendizaje, interpolamos su transparencia y demostramos de forma concreta que un parche más visible aumenta la dependencia. Después, aprendí a realizar barridos de hiperparámetros con validación cruzada k-fold y datos aumentados, y los ejecuté. Luego, para estimar cuántas de las características verdaderas y limpias seguía aprendiendo la red, implementé Deep Feature Reweighting (Kirichenko et al.). Todos nuestros experimentos se ejecutaron en un clúster de AWS EC2, donde promedié los resultados de distintas configuraciones para producir gráficas confiables, y presenté los hallazgos en reuniones del grupo donde discutimos nuevas direcciones. Aunque los resultados no fueron lo suficientemente sólidos para publicar un artículo, el proyecto me dio una gran experiencia en explicar, diseñar y depurar experimentos de aprendizaje automático.',
      'desc.scratch': 'Tras consultar con mis colaboradores, decidimos que sería interesante que explorara un enfoque “general” para calificar proyectos estudiantiles. La revisión de la literatura me llevó a un artículo (Malik et al. 2018) que usa una red neuronal simple para aprender las trayectorias de los estudiantes. Nuestro enfoque es similar: entrenamos un LSTM con datos sintéticos generados y, en el momento de la inferencia, los estudiantes pegan sus enlaces de scratch.mit.edu para ser calificados.',
      'desc.rpp': 'Un estudio de caso cualitativo orientado a anticipar tensiones en las alianzas entre investigación y práctica. Trabajamos junto con 3 distritos escolares del área de Santa Ana, CA, para llevar lecciones de alfabetización ambiental guiadas por las ciencias de la computación a estudiantes de 3.º y 4.º grado. Dediqué la mayor parte de mi tiempo a trabajar en más de 15,000 líneas de código, ampliando un proyecto de código abierto del Canon Lab de la University of Chicago. Además, ayudé a desarrollar el currículo, colaboré en reuniones y escribí documentación.'
    },

    de: {
      'projects': 'Projekte',
      'papers': 'Publikationen',
      'mentorship': 'Mentoring',

      'home.affil': 'Bachelorstudium, University of Southern California<br>Los Angeles, CA<br>reyesara@usc.edu<br>',
      'home.resume': 'Lebenslauf',
      'home.news': 'Neuigkeiten',
      'home.news1': 'September 2026: Ich bin in ein ganzjähriges Praktikum im Secure-Algorithms-Team der Sandia Labs gewechselt!',
      'home.news2': 'Mai - August 2026: Ich habe ein Praktikum bei den Sandia National Laboratories in den National Security Programs absolviert und am Computer Science Research Institute KI/ML-Projekte der Genesis Mission unterstützt.',
      'home.bio1': 'Ich komme aus einer Nichtakademikerfamilie, studiere Informatik im Bachelor und bin Teil der CS Theory Group, wo ich vom sehr umsichtigen <a href="https://vatsalsharan.github.io/">Vatsal Sharan</a> und den Mitgliedern seiner Gruppe betreut werde. Vor meiner Zeit an der USC habe ich sehr gerne mit <a href="https://www.clarebaek.com/">Clare Baek</a>, Dana Saito-Stehberger und <a href="https://markwarschauer.com/">Mark Warschauer</a> im Digital Learning Lab der University of California, Irvine zusammengearbeitet.',
      'home.bio2': 'Meine Interessen umfassen vertrauenswürdiges maschinelles Lernen aus der Perspektive von Optimierung, Sicherheit und Lerndynamik. Ich erforsche das Verhalten von Algorithmen des maschinellen Lernens in adversarialen, verrauschten und ressourcenbeschränkten Umgebungen. Meine Arbeit ist von dem Ziel motiviert, Werkzeuge der Informatik zur Lösung gesellschaftlicher Probleme einzusetzen. Kurze Beschreibungen meiner bisherigen Projekte finden Sie <a href="projects.html">hier</a>.',
      'home.bio3': 'Ich engagiere mich aktiv in studentischen Organisationen an der USC: Ich habe den Vorsitz von <a href="https://uscsacnas.weebly.com/">SACNAS</a> inne, war früher für das Veranstaltungsprogramm von <a href="https://www.colorstack.org/">Color Stack</a> verantwortlich und habe einen Ausschuss bei <a href="https://shpeusc.com/">SHPE</a> geleitet.',
      'home.workshop': 'Workshop',
      'home.muon.desc': 'Muon ermöglicht bei Ungleichgewicht auf Aufgabenebene einen ausgewogeneren, paralleleren Fähigkeitserwerb als SGD und Adam, gemessen mit einer neuen Metrik, dem Skill Acquisition Lag (SAL).',
      'home.muon.talk': 'Eingeladener Vortrag beim <em>Annual Machine Learning &amp; Deep Learning Workshop</em>, August 2026, an den Sandia National Laboratories.',
      'home.review': 'In Begutachtung',
      'home.neuro.desc': 'Partitionierung auf Basis spektraler Graphentheorie und Lastverteilung optimiert einen neuromorphen Compiler.',
      'home.neuro.venue': 'Demnächst auf ORCID',
      'home.rpp.desc': 'Frühes gemeinsames Sensemaking als vorausschauende Gestaltungsarbeit, um Spannungen rund um Chancengerechtigkeit bei der gemeinsamen Lehrplanentwicklung in RPPs zu bewältigen.',
      'home.rpp.venue': 'Eingereicht beim Journal of Learning Sciences',
      'home.highlighted': 'Ausgewählt',
      'home.agentic.desc': 'Unterstützung bei der Wartung eines internen agentischen Modells und Aufbau einer eigenen, lokal bereitgestellten agentischen Laufzeitumgebung.',
      'home.phenom.desc': 'Mit weißem Rauschen und künstlichen Patches als Scheinmerkmalen auf CIFAR-10 untersuchen wir, wann Modelle stark auf einfachere Merkmale setzen.',
      'home.allprojects': 'Alle bisherigen Projekte finden Sie <a href="projects.html">hier</a>.',
      'home.extra': 'Sonstiges',
      'home.brother': 'Mein jüngerer Bruder ist angehender Physiker: Schauen Sie sich <a href="https://www.linkedin.com/in/reese-r-7a6654269/">Reese</a> unbedingt an!',
      'summer2026': 'Sommer 2026',
      'summer2025': 'Sommer 2025',

      'link.paper': 'Paper',
      'link.poster': 'Poster',
      'link.video': 'Video',
      'link.slides': 'Folien',
      'link.code': 'Code',
      'link.more': 'Mehr',

      'side.fellowships': 'Stipendien',
      'side.supported': 'Ich werde dankenswerterweise gefördert von',
      'side.formerly': 'Früher gefördert von',
      'footer.rights': 'Alle Rechte vorbehalten.',

      'projects.pagetitle': 'Forschungsprojekte | Alex Reyes Aranda',
      'projects.title': 'Forschungsprojekte',
      'projects.intro': 'Ich bin dankbar für die Möglichkeiten und Kooperationen, die mich über die Jahre in der Forschung wachsen ließen, und freue mich darauf, meine Fähigkeiten in der Zusammenarbeit mit anderen weiter auszubauen!',
      'projects.note': 'Mit (*) markierte Projekte haben ein zugehöriges Paper oder einen Bericht.',
      'projects.legend': 'UIR = in interner Prüfung*, LIA = nur begrenzte Informationen verfügbar*',

      'proj.neuro': 'Optimierung neuromorpher Compiler',
      'proj.agentic': 'Agentische Modelle &amp; KI-Infrastruktur',
      'proj.muon': 'Muon verändert Multi-Task-Lernen',
      'proj.phenom': 'Phänomenologisches Deep Learning',
      'proj.scratch': 'Automatisierte Deep-Learning-Bewertung von Scratch-Projekten',
      'proj.rpp': 'Gestaltungsspannungen in Forschungs-Praxis-Partnerschaften antizipieren',

      'kw.neuro': 'Spektrales Graph-Clustering, Optimierung',
      'kw.agentic': 'Agenten, LLMs, MCPs, Containerisierung, Docker, Laufzeitumgebungen',
      'kw.muon': 'Neuronale Skalierungsgesetze, Optimierung im maschinellen Lernen',
      'kw.phenom': 'Robustes maschinelles Lernen, Computer Vision',
      'kw.scratch': 'Synthetische Daten, generative VAEs, probabilistische Programmierung',
      'kw.rpp': 'Informatikdidaktik, Lehrplanentwicklung, JavaScript',

      'desc.neuro': 'Wir haben Optimierungsmethoden für einen neuromorphen Compiler in der Simulation erforscht. Voraussichtlich Oktober 2026.',
      'desc.agentic': 'Ich habe gemeinsam mit verschiedenen Forschenden am Computer Science Research Institute bei der Wartung eines internen agentischen Modells mitgewirkt. Dabei habe ich praktische Erfahrung mit der Infrastruktur gesammelt, die KI-Systeme bereitstellt und ausführt, darunter Container, Laufzeitumgebungen und Agenten. Den ganzen Sommer über habe ich Fehler analysiert, Probleme behoben, sobald sie auftraten, und Forschungsarbeiten zu den zugrunde liegenden Modellen gelesen, um das System, an dem ich arbeitete, besser zu verstehen. Auf dieser Grundlage habe ich eine eigene, lokal bereitgestellte agentische Laufzeitumgebung entwickelt und vorgeführt und meine Fortschritte in wöchentlichen Meetings präsentiert.',
      'desc.muon': 'Spektrumbewusste Optimierer, insbesondere Muon, zeigen ein günstigeres empirisches Skalierungsverhalten als Optimierer wie SGD und Adam. Frühere Arbeiten erklären dies durch ausgewogeneres Lernen in Szenarien mit unausgewogenen Labels oder Eingabe-Ausgabe-Zuordnungen. Wir zeigen, dass Muon in Szenarien mit Ungleichgewicht auf Aufgabenebene einen ausgewogeneren Fähigkeitserwerb ermöglicht. In einem Multi-Task-Setup auf Basis von Sparse Parity werden Teilaufgaben mit Muon paralleler gelernt als mit anderen Optimierern. Wir führen die Metrik Skill Acquisition Lag (SAL) ein, um paralleles gegenüber sequenziellem Lernen zu quantifizieren. In einem einfachen Setting der linearen In-Context-Regression ist die Konvergenz von Muon sowohl vom Ungleichgewicht auf Aufgaben- als auch auf Eingabeebene unabhängig, im Gegensatz zu (normalisiertem) GD.',
      'desc.phenom': 'Wir haben ein Phänomen untersucht, bei dem eine zunehmende, aber variierende Menge an weißem Rauschen die Abhängigkeit eines Modells von Scheinkorrelationen zu erhöhen scheint. Ich habe Trainings- und Evaluierungspipelines in PyTorch geschrieben, um dies an CIFAR-10-Bildern zu testen, wobei ein Patch als Scheinmerkmal diente. Überraschenderweise zeigten die Ergebnisse dieses neuen Setups, dass sich das Modell vollständig auf den Patch stützte. Um festzustellen, wie stark der Patch das Lernen beeinflusste, haben wir seine Transparenz interpoliert und konkret gezeigt, dass ein sichtbarerer Patch die Abhängigkeit erhöht. Danach habe ich mich in Hyperparameter-Sweeps mit k-facher Kreuzvalidierung und augmentierten Daten eingearbeitet und diese durchgeführt. Um anschließend abzuschätzen, wie viel der echten, sauberen Merkmale das Netzwerk noch lernte, habe ich Deep Feature Reweighting (Kirichenko et al.) implementiert. Alle unsere Experimente liefen auf einem AWS-EC2-Cluster, wo ich die Ergebnisse über verschiedene Konfigurationen gemittelt habe, um verlässliche Diagramme zu erstellen. Die Ergebnisse habe ich in Gruppentreffen vorgestellt, in denen wir neue Richtungen diskutierten. Auch wenn die Ergebnisse nicht stark genug für ein Paper waren, hat mir das Projekt wertvolle Erfahrung darin vermittelt, Experimente im maschinellen Lernen zu erklären, zu entwerfen und zu debuggen.',
      'desc.scratch': 'Nach Rücksprache mit den Beteiligten haben wir entschieden, dass es interessant wäre, einen „allgemeinen“ Ansatz zur Bewertung von Schülerprojekten zu erkunden. Eine Literaturrecherche führte mich zu einem Paper (Malik et al. 2018), das ein einfaches neuronales Netz nutzt, um Lernverläufe von Schülerinnen und Schülern zu modellieren. Unser Ansatz ist ähnlich: Wir trainieren ein LSTM auf generierten synthetischen Daten, und zur Inferenzzeit fügen die Schülerinnen und Schüler ihre scratch.mit.edu-Links ein, um bewertet zu werden.',
      'desc.rpp': 'Eine qualitative Fallstudie mit dem Ziel, Spannungen in Forschungs-Praxis-Partnerschaften vorauszusehen. Gemeinsam mit 3 Schulbezirken in der Region Santa Ana, CA, haben wir informatikgestützte Unterrichtseinheiten zur Umweltbildung für Schülerinnen und Schüler der 3. und 4. Klasse entwickelt. Den Großteil meiner Zeit habe ich mit über 15.000 Zeilen Code verbracht, mit denen ich ein Open-Source-Projekt des Canon Lab der University of Chicago erweitert habe. Darüber hinaus habe ich bei der Lehrplanentwicklung geholfen, in Meetings mitgearbeitet und Dokumentation geschrieben.'
    },

    zh: {
      'projects': '项目',
      'papers': '论文',
      'mentorship': '指导',

      'home.affil': '本科生，南加州大学<br>加利福尼亚州洛杉矶<br>reyesara@usc.edu<br>',
      'home.resume': '简历',
      'home.news': '最新动态',
      'home.news1': '2026年9月：我转入桑迪亚国家实验室 Secure Algorithms 团队，开始全年实习！',
      'home.news2': '2026年5月至8月：我以实习生身份加入桑迪亚国家实验室国家安全项目部，并与计算机科学研究所合作，支持“创世纪计划”（Genesis Mission）中的人工智能/机器学习项目。',
      'home.bio1': '我是一名计算机科学专业的第一代本科生，也是 CS 理论组（CS Theory Group）的成员，由非常体贴细心的 <a href="https://vatsalsharan.github.io/">Vatsal Sharan</a> 及其团队成员指导。来到 USC 之前，我在加州大学尔湾分校的数字学习实验室（Digital Learning Lab）与 <a href="https://www.clarebaek.com/">Clare Baek</a>、Dana Saito-Stehberger 和 <a href="https://markwarschauer.com/">Mark Warschauer</a> 共事，度过了一段非常愉快的时光。',
      'home.bio2': '我的研究兴趣涵盖可信机器学习，并从优化、安全和学习动力学的角度展开。我研究机器学习算法在对抗性、易受噪声影响和资源受限环境中的行为。我的工作旨在利用计算机科学的工具为社会问题开发解决方案。我以往项目的简要介绍请见<a href="projects.html">此处</a>。',
      'home.bio3': '我积极参与 USC 的学生组织，目前担任 <a href="https://uscsacnas.weebly.com/">SACNAS</a> 主席，曾担任 <a href="https://www.colorstack.org/">Color Stack</a> 的活动策划负责人以及 <a href="https://shpeusc.com/">SHPE</a> 的委员会主任。',
      'home.workshop': '研讨会',
      'home.muon.desc': '在任务级不平衡条件下，Muon 比 SGD 和 Adam 能实现更均衡、更并行的技能习得，我们用一种新指标“技能习得滞后”（Skill Acquisition Lag, SAL）对此进行衡量。',
      'home.muon.talk': '受邀在桑迪亚国家实验室<em>年度机器学习与深度学习研讨会</em>（Annual Machine Learning &amp; Deep Learning Workshop）上作报告，2026年8月。',
      'home.review': '审稿中',
      'home.neuro.desc': '基于谱图理论和负载均衡的划分方法优化神经形态编译器。',
      'home.neuro.venue': '即将在 ORCID 上发布',
      'home.rpp.desc': '将早期意义建构视为一种预见性设计工作，用于应对研究-实践伙伴关系（RPP）课程共同设计中的公平性张力。',
      'home.rpp.venue': '已投稿至 Journal of Learning Sciences',
      'home.highlighted': '精选',
      'home.agentic.desc': '协助维护一个内部智能体模型，并自行构建一个本地部署的智能体运行时。',
      'home.phenom.desc': '在 CIFAR-10 上使用白噪声数据和虚假补丁，探究模型何时会严重依赖更简单的特征。',
      'home.allprojects': '所有过往项目请见<a href="projects.html">此处</a>。',
      'home.extra': '其他',
      'home.brother': '我的弟弟立志成为一名物理学家：欢迎了解一下 <a href="https://www.linkedin.com/in/reese-r-7a6654269/">Reese</a>！',
      'summer2026': '2026年夏季',
      'summer2025': '2025年夏季',

      'link.paper': '论文',
      'link.poster': '海报',
      'link.video': '视频',
      'link.slides': '幻灯片',
      'link.code': '代码',
      'link.more': '更多',

      'side.fellowships': '奖学金',
      'side.supported': '感谢以下机构的支持',
      'side.formerly': '曾获以下机构支持',
      'footer.rights': '保留所有权利。',

      'projects.pagetitle': '研究项目 | Alex Reyes Aranda',
      'projects.title': '研究项目',
      'projects.intro': '感谢这些年来让我在科研道路上不断成长的机会与合作者，我期待继续与他人合作，不断提升自己的能力！',
      'projects.note': '标有 (*) 的项目附有相关论文或报告。',
      'projects.legend': 'UIR = 内部审核中*，LIA = 可公开信息有限*',

      'proj.neuro': '神经形态编译器优化',
      'proj.agentic': '智能体模型与 AI 基础设施',
      'proj.muon': 'Muon 重塑多任务学习',
      'proj.phenom': '现象学深度学习',
      'proj.scratch': '基于深度学习的 Scratch 项目自动评估',
      'proj.rpp': '预见研究-实践伙伴关系中的设计张力',

      'kw.neuro': '谱图聚类、优化',
      'kw.agentic': '智能体、大语言模型、MCP、容器化、Docker、运行时',
      'kw.muon': '神经缩放定律、机器学习优化',
      'kw.phenom': '鲁棒机器学习、计算机视觉',
      'kw.scratch': '合成数据、生成式 VAE、概率编程',
      'kw.rpp': '计算机科学教育、课程开发、JavaScript',

      'desc.neuro': '我们在仿真环境中研究了神经形态编译器的优化方法。预计于2026年10月完成。',
      'desc.agentic': '我与计算机科学研究所的多位研究人员一起，协助维护一个内部智能体模型。我亲身参与了部署和运行 AI 系统的基础设施工作，包括容器、运行时和智能体。整个夏天，我排查并修复随时出现的问题，并阅读有关底层模型的研究论文，以更好地理解所参与的系统。在此基础上，我开发并演示了自己的本地部署智能体运行时，同时在每周例会上汇报进展。',
      'desc.muon': '谱感知优化器（尤其是 Muon）比 SGD 和 Adam 等优化器表现出更有利的经验缩放特性。已有研究将其解释为：在标签或输入-输出关联不平衡的情形下，学习更加均衡。我们证明，在任务级不平衡的情形下，Muon 能实现更均衡的技能习得。在基于稀疏奇偶校验的多任务设置中，使用 Muon 时各子任务的学习比使用其他优化器更加并行。我们提出了“技能习得滞后”（Skill Acquisition Lag, SAL）指标，用于量化并行学习与顺序学习。在一个简单的上下文线性回归设置中，与（归一化）梯度下降不同，Muon 的收敛与任务级和输入级的不平衡均无关。',
      'desc.phenom': '我们研究了这样一种现象：不断增加但强度变化的白噪声似乎会增强模型对虚假相关性的依赖。我编写了 PyTorch 训练和评估流程，在 CIFAR-10 图像上进行测试，并使用一个补丁作为虚假特征。出乎意料的是，这一新设置的结果显示模型完全依赖该补丁。为了确定补丁对学习的影响程度，我们对其透明度进行插值，具体证明了补丁越明显，模型的依赖程度越高。此后，我学习并运行了结合 k 折交叉验证和数据增强的超参数搜索。随后，为了估计网络仍学到了多少真实、干净的特征，我实现了 Deep Feature Reweighting（Kirichenko 等人）。我们所有的实验都在 AWS EC2 集群上运行，我对不同配置的结果取平均以生成可靠的图表，并在组会上汇报结果、讨论新的方向。虽然结果还不足以支撑一篇论文，但这个项目让我在解释、设计和调试机器学习实验方面积累了宝贵经验。',
      'desc.scratch': '与合作者商讨后，我们认为由我探索一种“通用”的学生项目评分方法会很有意义。通过文献调研，我找到了一篇论文（Malik et al. 2018），该论文使用简单的神经网络来学习学生的学习轨迹。我们的方法与之类似：在生成的合成数据上训练 LSTM，在推理阶段，学生只需粘贴他们的 scratch.mit.edu 链接即可获得评分。',
      'desc.rpp': '这是一项旨在预见研究-实践伙伴关系中各种张力的质性案例研究。我们与加州圣安娜地区的 3 个学区合作，为三、四年级学生带来以计算机科学为引导的环境素养课程。我大部分时间都埋头于 15,000 多行代码中，在芝加哥大学 Canon Lab 提供的开源项目基础上进行扩展。此外，我还协助开发课程、参与会议协作并撰写文档。'
    }
  };

  var htmlLang = { en: 'en', es: 'es', de: 'de', zh: 'zh-Hans' };

  // Keep the English text from the page so switching back restores it.
  var elements = document.querySelectorAll('[data-i18n]');
  var english = [];
  for (var i = 0; i < elements.length; i++) {
    english.push(elements[i].innerHTML);
  }

  var switches = document.querySelectorAll('[data-lang]');

  function setLanguage(lang) {
    if (!htmlLang[lang]) lang = 'en';
    var dict = translations[lang] || {};
    for (var i = 0; i < elements.length; i++) {
      var key = elements[i].getAttribute('data-i18n');
      elements[i].innerHTML = dict.hasOwnProperty(key) ? dict[key] : english[i];
    }
    for (var j = 0; j < switches.length; j++) {
      switches[j].className = switches[j].getAttribute('data-lang') === lang ? 'active' : '';
    }
    document.documentElement.lang = htmlLang[lang];
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  for (var k = 0; k < switches.length; k++) {
    switches[k].onclick = function (e) {
      e.preventDefault();
      setLanguage(this.getAttribute('data-lang'));
    };
  }

  var saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  setLanguage(saved || 'en');
})();
