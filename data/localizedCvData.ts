import { Locale } from '@/types/i18n';
import { Experience, Project, SkillCategory, Education, Achievement } from '@/types/portfolio';
import { EXPERIENCES, PROJECTS, SKILL_CATEGORIES, EDUCATION, ACHIEVEMENTS } from './cvData';

// Localized helper to translate dynamic data content seamlessly across all 7 languages

export function getSkillCategories(locale: Locale): SkillCategory[] {
  if (locale === 'en') return SKILL_CATEGORIES;

  const categoryNames: Record<Locale, Record<string, string>> = {
    en: {},
    ja: {
      backend: 'バックエンド、API & 言語',
      frontend: 'フロントエンド Web & デスクトップ',
      mobile: 'モバイル & クロスプラットフォーム',
      aitools: 'AI ツール & 生産性',
      devops: 'データベース、クラウド & DevOps',
      leadership: 'リーダーシップ & デリバリー',
    },
    es: {
      backend: 'Backend, APIs y Lenguajes',
      frontend: 'Frontend Web y Escritorio',
      mobile: 'Móvil y Multiplataforma',
      aitools: 'Herramientas de IA y Productividad',
      devops: 'Bases de Datos, Nube y DevOps',
      leadership: 'Liderazgo y Entrega',
    },
    de: {
      backend: 'Backend, APIs & Sprachen',
      frontend: 'Frontend Web & Desktop',
      mobile: 'Mobil & Plattformübergreifend',
      aitools: 'KI-Tools & Produktivität',
      devops: 'Datenbanken, Cloud & DevOps',
      leadership: 'Führung & Delivery',
    },
    ko: {
      backend: '백엔드, API & 언어',
      frontend: '프론트엔드 웹 & 데스크톱',
      mobile: '모바일 & 교차 플랫폼',
      aitools: 'AI 도구 & 생산성',
      devops: '데이터베이스, 클라우드 & DevOps',
      leadership: '리더십 & 딜리버리',
    },
    zh: {
      backend: '后端、API 与编程语言',
      frontend: '前端 Web & 桌面端',
      mobile: '移动端 & 跨平台',
      aitools: 'AI 工具与生产力',
      devops: '数据库、云端与 DevOps',
      leadership: '领导力与交付',
    },
    fil: {
      backend: 'Backend, APIs & Mga Wika',
      frontend: 'Frontend Web & Desktop',
      mobile: 'Mobile & Cross-Platform',
      aitools: 'AI Tools & Produktibidad',
      devops: 'Databases, Cloud & DevOps',
      leadership: 'Pamumuno & Delivery',
    },
  };

  return SKILL_CATEGORIES.map((cat) => ({
    ...cat,
    name: categoryNames[locale]?.[cat.id] || cat.name,
  }));
}

export function getExperiences(locale: Locale): Experience[] {
  if (locale === 'en') return EXPERIENCES;

  return EXPERIENCES.map((exp) => {
    if (locale === 'es') {
      if (exp.id === 'kryterion-lead') {
        return {
          ...exp,
          role: 'Líder de Equipo de Ingeniería de Software',
          company: 'Kryterion, Inc. (Plataforma Webassessor)',
          location: 'Remoto / Phoenix, Arizona, EE. UU.',
          period: 'Oct 2024 — Presente',
          summary: 'Liderando la ejecución del equipo de ingeniería, escalado arquitectónico y desarrollo full-stack para la plataforma Webassessor en web y móvil.',
          responsibilities: [
            'Liderar el diseño, desarrollo y escalado de la plataforma de evaluación en línea Webassessor en web y móvil utilizando Java (Spring Boot), MariaDB, SQL, Vue.js, Next.js, Tailwind CSS, Bootstrap, Flutter y React Native (iOS y Android).',
            'Brindar liderazgo técnico y orientación arquitectónica para garantizar un alto rendimiento, seguridad, accesibilidad web WCAG AAA, internacionalización multilingüe (i18n) y escalabilidad para sesiones globales de examen.',
            'Mentorear ingenieros de software a través de sesiones 1 a 1, revisiones de desempeño y planificación de desarrollo profesional.',
            'Coordinar con equipos multidisciplinarios (Ingenieros, Producto, Analistas, Diseñadores UI/UX, QA, DevOps, CTO) para alinear prioridades.',
            'Fomentar metodologías Ágiles, mejorando flujos de trabajo del equipo, planificación de sprints y eficiencia de entrega.',
            'Promover una cultura de ingeniería colaborativa centrada en la innovación, estándares de accesibilidad y mejora continua.',
          ],
        };
      }
      if (exp.id === 'kryterion-engineer') {
        return {
          ...exp,
          role: 'Ingeniero de Software (Full Stack)',
          company: 'Kryterion, Inc. (Plataforma Webassessor)',
          location: 'Remoto / Phoenix, Arizona, EE. UU.',
          period: 'Nov 2023 — Oct 2024',
          summary: 'Ingeniería full-stack para la plataforma Webassessor, microservicios e integraciones de API seguras.',
          responsibilities: [
            'Trabajar eficazmente en un entorno totalmente remoto colaborando a través de Microsoft Teams, Slack y Jira.',
            'Colaborar estrechamente con equipos internacionales e interdisciplinarios para entregar funcionalidades de alta calidad.',
            'Desarrollar y mantener aplicaciones web y móviles enfocadas en escalabilidad, rendimiento, accesibilidad y mantenibilidad.',
            'Diseñar e integrar APIs RESTful con autenticación segura para garantizar un acceso protegido.',
            'Participar en ceremonias de Agile Scrum como planificación de sprints y retrospectivas.',
          ],
        };
      }
      if (exp.id === 'caceres-fullstack') {
        return {
          ...exp,
          role: 'Desarrollador Full Stack',
          company: 'Arquidiócesis de CÁCERES',
          location: 'Híbrido / Ciudad de Naga, Filipinas',
          period: 'Sept 2021 — Nov 2023',
          summary: 'Diseño y despliegue de sistemas web y móviles full-stack, arquitecturas de bases de datos y herramientas automatizadas.',
          responsibilities: [
            'Diseñar, desarrollar y desplegar aplicaciones web y móviles full-stack escalables a través del frontend, backend, APIs y bases de datos.',
            'Realizar depuración profunda, análisis de causa raíz y resolución de problemas para garantizar la estabilidad.',
            'Gestionar entornos de servidor, implementar pipelines CI/CD y asegurar la arquitectura del sistema.',
            'Construir integraciones y herramientas de automatización para generación de documentos y procesamiento de datos.',
            'Brindar asistencia técnica, sesiones de incorporación y documentación de usuario.',
            'Aplicar controles de acceso, monitoreo y auditorías de rutina para salvaguardar la información sensible.',
          ],
        };
      }
      if (exp.id === 'caceres-system') {
        return {
          ...exp,
          role: 'Desarrollador de Sistemas',
          company: 'Arquidiócesis de CÁCERES',
          location: 'Presencial / Ciudad de Naga, Filipinas',
          period: 'Dic 2016 — Ago 2021',
          summary: 'Construcción de software administrativo, automatización de procesos y sistemas de bases de datos.',
          responsibilities: [
            'Progreso desde soporte de TI y administrativo hacia el desarrollo de sistemas, contribuyendo al diseño y mantenimiento de aplicaciones.',
            'Construir soluciones para digitalizar la programación, seguimiento de contribuciones y elaboración de informes.',
            'Mejorar la usabilidad, el rendimiento y los flujos de trabajo en sistemas financieros y administrativos.',
            'Brindar asistencia diaria de TI a usuarios finales asegurando una adopción fluida del sistema.',
            'Estructurar bases de datos, implementar lógica backend y ajustar interfaces frontend.',
          ],
        };
      }
    }

    if (locale === 'fil') {
      if (exp.id === 'kryterion-lead') {
        return {
          ...exp,
          role: 'Software Engineering Team Lead',
          company: 'Kryterion, Inc. (Webassessor Platform)',
          location: 'Remote / Phoenix, Arizona, USA',
          period: 'Okt 2024 — Kasalukuyan',
          summary: 'Pinamumunuan ang inhinyerya, arkitektura, at full-stack development para sa Webassessor platform sa web at mobile.',
          responsibilities: [
            'Pamunuan ang pagdidisenyo, pagbuo, at pagpapalawak ng Webassessor online assessment platform sa web at mobile gamit ang Java (Spring Boot), MariaDB, SQL, Vue.js, Next.js, Tailwind CSS, Bootstrap, Flutter, at React Native.',
            'Magbigay ng teknikal na pamumuno at gabay sa arkitektura upang matiyak ang mataas na pagganap, seguridad, WCAG AAA web accessibility, multi-language internationalization (i18n), at scalability para sa mga pandaigdigang pagsusulit.',
            'Mag-mentor sa mga inhinyero sa pamamagitan ng regular na 1-on-1 sessions at performance reviews.',
            'Makipag-ugnayan sa mga cross-functional na koponan (Product, Designers, QA, DevOps, CTO) para sa mga estratehikong prayoridad.',
            'Isulong ang Agile methodologies upang mapabuti ang daloy ng trabaho at kahusayan sa paghahatid.',
            'Linangin ang isang kolaboratibong kultura ng inhinyerya na nakatutok sa makabagong ideya at patuloy na pag-unlad.',
          ],
        };
      }
      if (exp.id === 'kryterion-engineer') {
        return {
          ...exp,
          role: 'Software Engineer (Full Stack)',
          company: 'Kryterion, Inc. (Webassessor Platform)',
          location: 'Remote / Phoenix, Arizona, USA',
          period: 'Nob 2023 — Okt 2024',
          summary: 'Full-stack engineering para sa Webassessor platform, microservices, at ligtas na API integrations.',
          responsibilities: [
            'Mahusay na nagtrabaho sa isang fully remote na kapaligiran gamit ang Microsoft Teams, Slack, at Jira.',
            'Nakipagtulungan sa mga internasyonal na koponan upang maghatid ng mga de-kalidad na tampok.',
            'Bumuo at nagpanatili ng mga web at mobile application na nakatuon sa scalability, performance, at accessibility.',
            'Nagdisenyo at nag-integrate ng RESTful APIs na may ligtas na awtentikasyon.',
            'Sumali sa mga Agile Scrum ceremonies tulad ng sprint planning at retrospectives.',
          ],
        };
      }
      if (exp.id === 'caceres-fullstack') {
        return {
          ...exp,
          role: 'Full Stack Developer',
          company: 'Arkodyosesis ng Caceres',
          location: 'Hybrid / Lungsod ng Naga, Pilipinas',
          period: 'Set 2021 — Nob 2023',
          summary: 'Pagdidisenyo at pagpapatakbo ng mga full-stack web at mobile system, arkitektura ng database, at mga awtomatikong tool.',
          responsibilities: [
            'Nagdisenyo, nagbuo, at nagpatakbo ng mga scalable na full-stack web at mobile application sa frontend, backend, APIs, at databases.',
            'Nagsagawa ng malalim na debugging at pagsusuri upang matiyak ang katatagan ng application.',
            'Nangasiwa ng mga kapaligiran ng server, nagpatupad ng CI/CD pipelines, at nag-secure ng system architecture.',
            'Bumuo ng mga tool sa awtomasyon para sa paggawa ng dokumento at pagproseso ng data.',
            'Nagbigay ng teknikal na tulong at dokumentasyon sa mga gumagamit.',
            'Nagpatupad ng mga kontrol sa pag-access at regular na audit upang protektahan ang sensitibong impormasyon.',
          ],
        };
      }
      if (exp.id === 'caceres-system') {
        return {
          ...exp,
          role: 'System Developer',
          company: 'Arkodyosesis ng Caceres',
          location: 'On-Site / Lungsod ng Naga, Pilipinas',
          period: 'Dis 2016 — Ago 2021',
          summary: 'Pagbuo ng administrative software, awtomasyon ng proseso, at mga sistema ng database.',
          responsibilities: [
            'Umunlad mula sa IT support tungo sa system development, tumutulong sa pagdidisenyo at pagpapanatili ng mga application.',
            'Bumuo ng mga solusyon upang i-digitize ang iskedyul, pagsubaybay sa ambag, at pag-uulat.',
            'Pinabuti ang kakayahang magamit at pagganap sa mga sistemang pinansyal at administratibo.',
            'Nagbigay ng araw-araw na tulong sa IT sa mga gumagamit.',
            'Nag-ayos ng mga database, nagpatupad ng backend logic, at nag-ayos ng mga frontend interface.',
          ],
        };
      }
    }

    if (locale === 'de') {
      if (exp.id === 'kryterion-lead') {
        return {
          ...exp,
          role: 'Software Engineering Team Lead',
          company: 'Kryterion, Inc. (Webassessor-Plattform)',
          location: 'Remote / Phoenix, Arizona, USA',
          period: 'Okt 2024 — Heute',
          summary: 'Leitung der Ausführung des Entwicklungsteams, der architektonischen Skalierung und der Full-Stack-Entwicklung für die Webassessor-Plattform auf Web und Mobile.',
          responsibilities: [
            'Leitung des Designs, der Entwicklung und der Skalierung der Webassessor-Plattform mit Java (Spring Boot), MariaDB, Vue.js, Next.js, Tailwind CSS, Flutter und React Native.',
            'Bereitstellung technischer Führung und Architekturberatung zur Gewährleistung von hoher Leistung, Sicherheit, WCAG AAA Barrierefreiheit, mehrsprachiger Internationalisierung (i18n) und Skalierbarkeit.',
            'Mentoring von Softwareingenieuren durch regelmäßige 1-zu-1-Sitzungen und Leistungsbeurteilungen.',
            'Koordinierung mit funktionsübergreifenden Teams (Produkt, UI/UX, QA, DevOps, CTO) zur Ausrichtung von Prioritäten.',
            'Förderung von Agile-Methoden zur Verbesserung der Team-Workflows und Liefer-Effizienz.',
            'Pflege einer kollaborativen Entwicklungskultur mit Fokus auf Innovation und kontinuierliche Verbesserung.',
          ],
        };
      }
      if (exp.id === 'kryterion-engineer') {
        return {
          ...exp,
          role: 'Software Engineer (Full Stack)',
          company: 'Kryterion, Inc. (Webassessor-Plattform)',
          location: 'Remote / Phoenix, Arizona, USA',
          period: 'Nov 2023 — Okt 2024',
          summary: 'Full-Stack-Engineering für die Webassessor-Plattform, Mikroservices und sichere API-Integrationen.',
          responsibilities: [
            'Effektive Arbeit in einer Remote-Umgebung über Microsoft Teams, Slack und Jira.',
            'Enger Austausch mit internationalen Teams zur Lieferung hochwertiger Funktionen.',
            'Entwicklung und Wartung von Web- und mobilen Anwendungen mit Fokus auf Leistung und Wartbarkeit.',
            'Entwurf und Integration von RESTful-APIs mit sicherer Authentifizierung.',
            'Teilnahme an Agile-Scrum-Ceremonies wie Sprint-Planung und Retrospektiven.',
          ],
        };
      }
      if (exp.id === 'caceres-fullstack') {
        return {
          ...exp,
          role: 'Full Stack Entwickler',
          company: 'Erzdiözese Caceres',
          location: 'Hybrid / Naga City, Philippinen',
          period: 'Sept 2021 — Nov 2023',
          summary: 'Architektur und Bereitstellung von Full-Stack-Web- und Mobil-Systemen sowie Datenbankarchitekturen.',
          responsibilities: [
            'Design, Entwicklung und Bereitstellung skalierbarer Full-Stack-Anwendungen über Frontend, Backend, APIs und Datenbanken.',
            'Durchführung tiefgreifender Fehlerbehebung zur Gewährleistung der Anwendungsstabilität.',
            'Verwaltung von Serverumgebungen, Implementierung von CI/CD-Pipelines und Sicherung der Systemarchitektur.',
            'Erstellung von Automatisierungstools zur Dokumentengenerierung und Datenverarbeitung.',
            'Bereitstellung technischer Unterstützung und Benutzdokumentation.',
            'Anwendung von Zugriffskontrollen und Audits zum Schutz sensibler Informationen.',
          ],
        };
      }
      if (exp.id === 'caceres-system') {
        return {
          ...exp,
          role: 'Systementwickler',
          company: 'Erzdiözese Caceres',
          location: 'Vor Ort / Naga City, Philippinen',
          period: 'Dez 2016 — Aug 2021',
          summary: 'Entwicklung von Verwaltungssoftware, Prozessautomatisierung und Datenbank-Systemen.',
          responsibilities: [
            'Aufstieg vom IT-Support zur Systementwicklung mit Beiträgen zu Design und Wartung.',
            'Entwicklung von Lösungen zur Digitalisierung von Terminplanung, Beitragsverfolgung und Berichterstattung.',
            'Verbesserung der Benutzerfreundlichkeit und Leistung in Finanz- und Verwaltungssystemen.',
            'Tägliche IT-Unterstützung für Endbenutzer.',
            'Strukturierung von Datenbanken, Implementierung von Backend-Logik und Anpassen von Benutzeroberflächen.',
          ],
        };
      }
    }

    if (locale === 'ja') {
      if (exp.id === 'kryterion-lead') {
        return {
          ...exp,
          role: 'ソフトウェアエンジニアリング チームリード',
          company: 'Kryterion 社 (Webassessor プラットフォーム)',
          location: 'リモート / 米国 アリゾナ州 フェニックス',
          period: '2024年10月 — 現在',
          summary: 'WebおよびモバイルにわたるWebassessor試験配信プラットフォームの開発チーム統括、アーキテクチャ拡張、フルスタック開発を牽引。',
          responsibilities: [
            'Java (Spring Boot)、MariaDB、Vue.js、Next.js、Tailwind CSS、Bootstrap、Flutter、React Nativeを用いたWebassessorの設計・開発・拡張の統括。',
            'グローバルな試験セッションにおける高性能、セキュリティ、WCAG AAAアクセシビリティ、多言語国際化(i18n)および拡張性を確保する技術指導。',
            '定期的な1対1の面談、人事評価、キャリア開発計画を通じたエンジニアの育成。',
            'プロダクト、UI/UX、QA、DevOps、CTOなどのクロスファンクショナルチームとの連携。',
            'アジャイル開発の推進によるスプリント計画と配信効率の向上。',
            'イノベーション、アクセシビリティ標準、継続的改善に焦点を当てた協力的なエンジニアリング文化の育成。',
          ],
        };
      }
      if (exp.id === 'kryterion-engineer') {
        return {
          ...exp,
          role: 'フルスタック ソフトウェアエンジニア',
          company: 'Kryterion 社 (Webassessor プラットフォーム)',
          location: 'リモート / 米国 アリゾナ州 フェニックス',
          period: '2023年11月 — 2024年10月',
          summary: 'Webassessorプラットフォーム、マイクロサービス、セキュアなAPI連携のフルスタック開発。',
          responsibilities: [
            'Microsoft Teams、Slack、Jiraを活用した完全リモート環境でのスムーズな連携。',
            'プロダクトオーナー、開発マネージャー、QA、DevOps、デザイナーと協力した高品質な機能の提供。',
            '拡張性、パフォーマンス、アクセシビリティ、保守性に優れたWebおよびモバイルアプリの開発・保守。',
            '安全な認証を備えたRESTful APIの設計と統合。',
            'スプリント計画やレトロスペクティブなどのアジャイルスクラム開発への参加。',
          ],
        };
      }
      if (exp.id === 'caceres-fullstack') {
        return {
          ...exp,
          role: 'フルスタックWeb & モバイルデベロッパー',
          company: 'カセレス大司教区',
          location: 'ハイブリッド / フィリピン ナガ市',
          period: '2021年9月 — 2023年11月',
          summary: 'フルスタックWeb・モバイルシステム、データベース設計、自動化ツールの設計および運用。',
          responsibilities: [
            'フロントエンド、バックエンド、API、データベースにわたる拡張可能なフルスタックWebおよびモバイルアプリの設計・開発・運用。',
            '詳細なデバッグ、根本原因分析、問題解決によるアプリケーションの安定性確保。',
            'サーバー環境の管理、CI/CDパイプラインの構築、システムアーキテクチャのセキュリティ強化。',
            '書類生成、データ処理、レポート作成などの自動化ツール構築による手動作業の削減。',
            'スムーズな導入のための技術サポート、オンボーディング、ユーザーマニュアルの作成。',
            'アクセス制御、モニタリング、定期監査による機密情報の保護。',
          ],
        };
      }
      if (exp.id === 'caceres-system') {
        return {
          ...exp,
          role: 'システムデベロッパー',
          company: 'カセレス大司教区',
          location: 'オンサイト / フィリピン ナガ市',
          period: '2016年12月 — 2021年8月',
          summary: '管理ソフトウェア開発、プロセス自動化、データベースシステムの構築。',
          responsibilities: [
            'ITサポートからシステム開発へと昇格し、Webおよびモバイルアプリの設計・開発・保守に貢献。',
            'スケジュール管理、寄付追跡、レポート作成をデジタル化するソリューションの構築。',
            '財務および管理システムにおける使いやすさ、パフォーマンス、ワークフローの改善。',
            '日常的なITサポートの提供によるシステム導入の支援。',
            'データベース構造の設計、バックエンドロジックの実装、フロントエンド画面の調整。',
          ],
        };
      }
    }

    if (locale === 'ko') {
      if (exp.id === 'kryterion-lead') {
        return {
          ...exp,
          role: '소프트웨어 엔지니어링 팀 리드',
          company: 'Kryterion, Inc. (Webassessor 플랫폼)',
          location: '원격 / 미국 아리조나 피닉스',
          period: '2024년 10월 — 현재',
          summary: '웹 및 모바일 플랫폼 Webassessor의 엔지니어링 팀 실행, 아키텍처 확장 및 풀스택 개발 주도.',
          responsibilities: [
            'Java (Spring Boot), MariaDB, SQL, Vue.js, Next.js, Tailwind CSS, Bootstrap, Flutter, React Native를 사용한 Webassessor 플랫폼의 설계, 개발 및 확장 총괄.',
            '글로벌 시험 세션을 위한 고성능, 보안, WCAG AAA 접근성, 다국어 국제화(i18n) 및 확장성을 보장하는 기술 지도.',
            '정기적인 1대1 세션 및 성과 평가를 통한 소프트웨어 엔지니어 멘토링.',
            '다기능 팀(제품, UI/UX, QA, DevOps, CTO)과 협력하여 전략적 우선순위 조율.',
            '애자일 방법론을 추진하여 팀 워크플로우 및 스프린트 제공 효율성 향상.',
            '혁신 및 지속적인 개선에 중점을 둔 협력적인 엔지니어링 문화 조성.',
          ],
        };
      }
      if (exp.id === 'kryterion-engineer') {
        return {
          ...exp,
          role: '풀스택 소프트웨어 엔지니어',
          company: 'Kryterion, Inc. (Webassessor 플랫폼)',
          location: '원격 / 미국 아리조나 피닉스',
          period: '2023년 11월 — 2024년 10월',
          summary: 'Webassessor 플랫폼, 마이크로서비스 및 안전한 API 통합을 위한 풀스택 엔지니어링.',
          responsibilities: [
            'Microsoft Teams, Slack, Jira를 통해 원격 환경에서 효율적으로 협업.',
            '글로벌 다기능 팀과 긴밀히 협력하여 고품질 기능 제공.',
            '확장성, 성능, 접근성 및 유지 관리성에 중점을 둔 웹 및 모바일 앱 개발.',
            '안전한 인증을 갖춘 RESTful API 설계 및 통합.',
            '스프린트 계획 및 회고 등 애자일 스크럼 회의 참여.',
          ],
        };
      }
      if (exp.id === 'caceres-fullstack') {
        return {
          ...exp,
          role: '풀스택 개발자',
          company: '카세레스 대교구',
          location: '하이브리드 / 필리핀 나가 시',
          period: '2021년 9월 — 2023년 11월',
          summary: '풀스택 웹 및 모바일 시스템, 데이터베이스 아키텍처 및 자동화 도구 설계 및 배포.',
          responsibilities: [
            '프론트엔드, 백엔드, API, 데이터베이스 전반에 걸친 풀스택 웹 및 모바일 애플리케이션 설계 및 배포.',
            '심층 디버깅 및 문제 해결을 통한 애플리케이션 안정성 확보.',
            '서버 환경 관리, CI/CD 파이프라인 구현 및 시스템 아키텍처 보안 강화.',
            '문서 생성 및 데이터 처리를 위한 자동화 도구 구축.',
            '기술 지원, 온보딩 세션 및 사용자 문서 제공.',
            '민감한 정보를 보호하기 위한 접근 제어 및 정기 감사 실시.',
          ],
        };
      }
      if (exp.id === 'caceres-system') {
        return {
          ...exp,
          role: '시스템 개발자',
          company: '카세레스 대교구',
          location: '온사이트 / 필리핀 나가 시',
          period: '2016년 12월 — 2021년 8월',
          summary: '행정 소프트웨어 개발, 프로세스 자동화 및 데이터베이스 시스템 구축.',
          responsibilities: [
            'IT 지원에서 시스템 개발로 성장하여 웹 및 모바일 앱의 설계 및 유지 관리에 기여.',
            '일정 관리, 기부 추적 및 보고서 작성을 디지털화하는 솔루션 구축.',
            '재무 및 행정 시스템의 사용성, 성능 및 워크플로우 개선.',
            '원활한 시스템 도입을 위한 일상적인 IT 지원 제공.',
            '데이터베이스 구조 설계, 백엔드 로직 구현 및 프론트엔드 화면 조정.',
          ],
        };
      }
    }

    if (locale === 'zh') {
      if (exp.id === 'kryterion-lead') {
        return {
          ...exp,
          role: '软件工程团队负责人',
          company: 'Kryterion, Inc. (Webassessor 平台)',
          location: '远程 / 美国 亚利桑那州 菲尼克斯',
          period: '2024年10月 — 至今',
          summary: '领导 Web 和移动端 Webassessor 考试交付平台的工程团队执行、架构扩展及全栈开发。',
          responsibilities: [
            '主导使用 Java (Spring Boot)、MariaDB、Vue.js、Next.js、Tailwind CSS、Flutter 与 React Native 开发和扩展 Webassessor 考试平台。',
            '提供技术领导与架构指导，确保全球考试会话的高性能、安全性、WCAG AAA 无障碍标准与多语言国际化 (i18n)。',
            '通过定期一对一辅导、绩效评估与职业发展规划指导软件工程师。',
            '与跨职能团队（产品、UI/UX、QA、DevOps、CTO）协调，对齐战略优先级。',
            '推行敏捷开发方法，优化团队工作流、冲刺计划与交付效率。',
            '培养以创新、无障碍标准与持续改进为核心的协作型工程文化。',
          ],
        };
      }
      if (exp.id === 'kryterion-engineer') {
        return {
          ...exp,
          role: '全栈软件工程师',
          company: 'Kryterion, Inc. (Webassessor 平台)',
          location: '远程 / 美国 亚利桑那州 菲尼克斯',
          period: '2023年11月 — 2024年10月',
          summary: 'Webassessor 平台的全栈工程、微服务及安全 API 集成。',
          responsibilities: [
            '通过 Microsoft Teams、Slack 和 Jira 在完全远程的环境中高效协作。',
            '与全球跨职能团队紧密合作，交付高质量功能。',
            '开发与维护注重可扩展性、高性能、无障碍与可维护性的 Web 和移动端应用。',
            '设计并集成具备安全身份验证的 RESTful API。',
            '参与敏捷 Scrum 仪式，包括冲刺计划与回顾会议。',
          ],
        };
      }
      if (exp.id === 'caceres-fullstack') {
        return {
          ...exp,
          role: '全栈开发人员',
          company: '卡塞雷斯总教区',
          location: '混合办公 / 菲律宾 纳加市',
          period: '2021年9月 — 2023年11月',
          summary: '架构与部署全栈 Web 和移动端系统、数据库架构及自动化工具。',
          responsibilities: [
            '设计、开发并部署涵盖前端、后端、API 和数据库的可扩展全栈 Web 与移动端应用。',
            '执行深度调试、根本原因分析与问题解决，确保应用稳定性。',
            '管理服务器环境、实施 CI/CD 流水线并保障系统架构安全。',
            '构建用于文档生成和数据处理的自动化工具，减少人工工作量。',
            '提供技术支持、入职培训与用户文档。',
            '实施访问控制、监控和日常审计，以保护敏感信息。',
          ],
        };
      }
      if (exp.id === 'caceres-system') {
        return {
          ...exp,
          role: '系统开发人员',
          company: '卡塞雷斯总教区',
          location: '现场办公 / 菲律宾 纳加市',
          period: '2016年12月 — 2021年8月',
          summary: '构建行政管理软件、流程自动化与数据库系统。',
          responsibilities: [
            '从 IT 支持晋升至系统开发，参与 Web 与移动端应用的设计、开发与维护。',
            '构建解决方案以实现日程安排、捐赠跟踪与报告生成的数字化。',
            '改进财务与行政管理系统的易用性、性能与工作流。',
            '为终端用户提供日常 IT 支持，确保系统平稳采用。',
            '设计数据库结构、实现后端逻辑并调整前端界面。',
          ],
        };
      }
    }

    return exp;
  });
}

export function getProjects(locale: Locale): Project[] {
  if (locale === 'en') return PROJECTS;

  return PROJECTS.map((proj) => {
    if (locale === 'ja') {
      if (proj.id === 'qapione-saas') {
        return {
          ...proj,
          title: 'QAPione — 自動品質保証 (QA) プラットフォーム',
          category: 'Web & クラウド',
          description: 'クラウドネイティブの自動ソフトウェアテストおよびQAワークフロー管理システム。',
          projectType: 'SaaS / B2B プラットフォーム',
          database: 'Supabase (PostgreSQL)',
          highlights: [
            'Supabase PostgreSQL、Stripe決済、行レベルセキュリティ(RLS)を備えたマルチテナントSaaS。',
            '自動テストスイート実行、リアルタイム結果ダッシュボード、Vercelクラウドホスティング。',
          ],
        };
      }
      if (proj.id === 'stelifo-platform') {
        return {
          ...proj,
          title: 'Stelifo — SaaS & B2B Web・モバイルプラットフォーム',
          category: 'Web & クラウド',
          description: '業務自動化ワークフローのためのWebおよびモバイルアプリを備えたデジタル変革SaaS。',
          projectType: 'SaaS / B2B Web & モバイルプラットフォーム',
          database: 'Supabase (PostgreSQL)',
          highlights: [
            'React Nativeで構築されたWebアプリおよびクロスプラットフォームモバイルアプリ。',
            'Stripeサブスクリプション決済、Resend.comメール配信、Vercelホスティングを統合。',
          ],
        };
      }
      if (proj.id === 'vibe-ai') {
        return {
          ...proj,
          title: 'Vibe AI — インテリジェント ワークスペース アシスタント',
          category: 'Web & クラウド',
          description: '生成AIモデルを搭載したAI駆動のコンテンツおよび生産性向上エンジン。',
          projectType: 'SaaS / AI プロダクト',
          database: 'Supabase (PostgreSQL)',
          highlights: [
            'プロンプト生成およびコードリファクタリング用のLLM APIストリームを統合。',
            '高性能なNext.js App RouterアーキテクチャでVercelにデプロイ。',
          ],
        };
      }
      if (proj.id === 'kryterion-engine') {
        return {
          ...proj,
          title: 'Webassessor — Kryterion オンライン試験配信プラットフォーム',
          category: 'エンタープライズ & 自動化',
          description: '世界中の受験者に同時に対応する高コンカレンシーのオンライン試験・監視システム。',
          projectType: 'エンタープライズ試験プラットフォーム',
          database: 'MariaDB + Redis キャッシュ',
          highlights: [
            '高コンカレンシーの試験セッション状態を持つコア評価配信エンジンを拡張。',
            '世界中の受験者のためにスムーズな言語切り替えを可能にする多言語国際化(i18n)および動的ローカライゼーションエンジンを構築。',
            'Vue.js、Bootstrap、Tailwind CSSを使用し、WCAGアクセシビリティ規格に準拠したWebUIを構築。',
          ],
        };
      }
    }

    if (locale === 'es') {
      if (proj.id === 'qapione-saas') {
        return {
          ...proj,
          category: 'Web y Nube',
          projectType: 'Plataforma SaaS / B2B',
          database: 'Supabase (PostgreSQL)',
          description: 'Gestor automatizado de pruebas de software y flujo de trabajo de control de calidad nativo de la nube.',
          highlights: [
            'SaaS multinquilino con Supabase PostgreSQL, pagos Stripe y seguridad RLS.',
            'Ejecución de pruebas automatizadas y paneles de resultados en tiempo real con hosting Vercel.',
          ],
        };
      }
      if (proj.id === 'stelifo-platform') {
        return {
          ...proj,
          category: 'Web y Nube',
          projectType: 'Plataforma Web y Móvil SaaS / B2B',
          database: 'Supabase (PostgreSQL)',
          description: 'Plataforma de transformación digital SaaS con aplicaciones web y móviles para flujos de trabajo empresariales.',
          highlights: [
            'Plataforma web y aplicación móvil multiplataforma construida con React Native.',
            'Pagos por suscripción con Stripe, correos transaccionales con Resend.com y hosting Vercel.',
          ],
        };
      }
      if (proj.id === 'vibe-ai') {
        return {
          ...proj,
          category: 'Web y Nube',
          projectType: 'Producto SaaS / IA',
          database: 'Supabase (PostgreSQL)',
          description: 'Motor de contenido y productividad impulsado por modelos de inteligencia artificial generativa.',
          highlights: [
            'Flujos de API de LLM integrados para generación de prompts y refactorización de código.',
            'Desplegado en Vercel con arquitectura de alto rendimiento Next.js App Router.',
          ],
        };
      }
      if (proj.id === 'kryterion-engine') {
        return {
          ...proj,
          category: 'Empresarial y Automatización',
          projectType: 'Plataforma Empresarial de Evaluación',
          database: 'MariaDB + Caché Redis',
          description: 'Plataforma global de evaluación en línea e inspección de exámenes de alta concurrencia.',
          highlights: [
            'Motor de evaluación central escalado con estado de sesión de examen de alta concurrencia.',
            'Motor de internacionalización multilingüe (i18n) y localización dinámica diseñado para permitir el cambio fluido de idiomas para candidatos globales.',
            'Interfaces web responsivas con Vue.js, Bootstrap, Tailwind CSS y estándares WCAG.',
          ],
        };
      }
    }

    if (locale === 'fil') {
      if (proj.id === 'qapione-saas') {
        return {
          ...proj,
          category: 'Web at Cloud',
          projectType: 'SaaS / B2B Platform',
          database: 'Supabase (PostgreSQL)',
          highlights: [
            'Multi-tenant SaaS na may Supabase PostgreSQL, Stripe payments, at Row Level Security.',
            'Awtomatikong pagpapatakbo ng test suite, real-time dashboards, at Vercel cloud hosting.',
          ],
        };
      }
      if (proj.id === 'stelifo-platform') {
        return {
          ...proj,
          category: 'Web at Cloud',
          projectType: 'SaaS / B2B Web at Mobile Platform',
          database: 'Supabase (PostgreSQL)',
          highlights: [
            'Web application platform at cross-platform mobile app na binuo gamit ang React Native.',
            'Integrated Stripe subscription payments, Resend.com emails, at Vercel hosting.',
          ],
        };
      }
      if (proj.id === 'vibe-ai') {
        return {
          ...proj,
          category: 'Web at Cloud',
          projectType: 'SaaS / AI Product',
          database: 'Supabase (PostgreSQL)',
          highlights: [
            'Pinagsamang LLM API streams para sa prompt generation at code refactoring.',
            'Naka-deploy sa Vercel gamit ang mabilis na Next.js App Router architecture.',
          ],
        };
      }
      if (proj.id === 'kryterion-engine') {
        return {
          ...proj,
          category: 'Enterprise at Awtomasyon',
          projectType: 'Enterprise Assessment Platform',
          database: 'MariaDB + Redis Caching',
          highlights: [
            'Pinalawak ang core assessment engine para sa maraming sabay-sabay na kumuha ng pagsusulit.',
            'Bumuo ng multi-language internationalization (i18n) at dynamic localization engine na nagbibigay-daan sa mabilis na pagpapalit ng wika para sa mga pandaigdigang kumuha ng pagsusulit.',
            'Bumuo ng responsive web UI gamit ang Vue.js, Bootstrap, at Tailwind CSS na may WCAG standards.',
          ],
        };
      }
    }

    if (locale === 'de') {
      if (proj.id === 'qapione-saas') {
        return {
          ...proj,
          category: 'Web & Cloud',
          projectType: 'SaaS / B2B-Plattform',
          database: 'Supabase (PostgreSQL)',
          highlights: [
            'Multi-Tenant-SaaS mit Supabase PostgreSQL, Stripe-Zahlungen und Row Level Security.',
            'Automatische Testausführung, Echtzeit-Ergebnis-Dashboards und Vercel-Cloud-Hosting.',
          ],
        };
      }
      if (proj.id === 'stelifo-platform') {
        return {
          ...proj,
          category: 'Web & Cloud',
          projectType: 'SaaS / B2B-Web- & Mobilplattform',
          database: 'Supabase (PostgreSQL)',
          highlights: [
            'Webanwendungs-Plattform und plattformübergreifende mobile App entwickelt mit React Native.',
            'Integrierte Stripe-Abonnementzahlungen, Resend.com-E-Mails und Vercel-Hosting.',
          ],
        };
      }
      if (proj.id === 'vibe-ai') {
        return {
          ...proj,
          category: 'Web & Cloud',
          projectType: 'SaaS / KI-Produkt',
          database: 'Supabase (PostgreSQL)',
          highlights: [
            'Integrierte LLM-API-Streams für Prompt-Generierung und Code-Refactoring.',
            'Bereitgestellt auf Vercel mit leistungsstarker Next.js App Router-Architektur.',
          ],
        };
      }
      if (proj.id === 'kryterion-engine') {
        return {
          ...proj,
          category: 'Enterprise & Automatisierung',
          projectType: 'Enterprise-Bewertungsplattform',
          database: 'MariaDB + Redis-Caching',
          highlights: [
            'Skalierte zentrale Bewertungsengine mit hochparallelem Prüfungsstatus.',
            'Entwicklung einer mehrsprachigen Internationalisierungs- (i18n) und dynamischen Lokalisierungsengine für nahtlosen Sprachwechsel weltweit.',
            'Responsive Web-Benutzeroberflächen mit Vue.js, Bootstrap, Tailwind CSS und WCAG-Standards entwickelt.',
          ],
        };
      }
    }

    if (locale === 'ko') {
      if (proj.id === 'qapione-saas') {
        return {
          ...proj,
          title: 'QAPione — 자동화된 QA 플랫폼',
          category: '웹 & 클라우드',
          description: '클라우드 네이티브 자동화 소프트웨어 테스트 및 QA 워크플로우 관리 시스템.',
          projectType: 'SaaS / B2B 플랫폼',
          database: 'Supabase (PostgreSQL)',
          highlights: [
            'Supabase PostgreSQL, Stripe 결제 및 행 수준 보안(RLS)을 갖춘 멀티테넌트 SaaS.',
            '자동화된 테스트 실행, 실시간 결과 대시보드 및 Vercel 클라우드 호스팅.',
          ],
        };
      }
      if (proj.id === 'stelifo-platform') {
        return {
          ...proj,
          title: 'Stelifo — SaaS & B2B 웹 및 모바일 플랫폼',
          category: '웹 & 클라우드',
          description: '비즈니스 자동화 워크플로우를 위한 웹 및 모바일 앱을 갖춘 디지털 전환 SaaS.',
          projectType: 'SaaS / B2B 웹 및 모바일 플랫폼',
          database: 'Supabase (PostgreSQL)',
          highlights: [
            'React Native로 구축된 웹 애플리케이션 플랫폼 및 교차 플랫폼 모바일 앱.',
            'Stripe 구독 결제, Resend.com 이메일 및 Vercel 호스팅 통합.',
          ],
        };
      }
      if (proj.id === 'vibe-ai') {
        return {
          ...proj,
          title: 'Vibe AI — 지능형 워크스페이스 어시스턴트',
          category: '웹 & 클라우드',
          description: '생성형 AI 모델로 구동되는 AI 기반 콘텐츠 및 생산성 엔진.',
          projectType: 'SaaS / AI 제품',
          database: 'Supabase (PostgreSQL)',
          highlights: [
            '프롬프트 생성 및 코드 리팩토링을 위한 LLM API 스트림 통합.',
            '고성능 Next.js App Router 아키텍처로 Vercel에 배포.',
          ],
        };
      }
      if (proj.id === 'kryterion-engine') {
        return {
          ...proj,
          title: 'Webassessor — Kryterion 온라인 시험 전달 플랫폼',
          category: '엔터프라이즈 & 자동화',
          description: '전 세계 응시자를 동시에 지원하는 고동시성 온라인 시험 및 감독 시스템.',
          projectType: '엔터프라이즈 평가 플랫폼',
          database: 'MariaDB + Redis 캐싱',
          highlights: [
            '고동시성 시험 세션 상태를 갖춘 핵심 평가 전달 엔진 확장.',
            '전 세계 응시자를 위한 실시간 언어 전환을 지원하는 다국어 국제화(i18n) 및 동적 로컬라이제이션 엔진 구축.',
            'Vue.js, Bootstrap, Tailwind CSS를 사용하고 WCAG 접근성 표준을 준수한 웹 UI 구축.',
          ],
        };
      }
    }

    if (locale === 'zh') {
      if (proj.id === 'qapione-saas') {
        return {
          ...proj,
          title: 'QAPione — 自动化 QA 平台',
          category: 'Web 与云端',
          description: '云原生自动化软件测试与 QA 工作流管理系统。',
          projectType: 'SaaS / B2B 平台',
          database: 'Supabase (PostgreSQL)',
          highlights: [
            '具备 Supabase PostgreSQL、Stripe 支付及行级安全 (RLS) 的多租户 SaaS。',
            '自动化测试套件执行、实时结果仪表板与 Vercel 云端托管。',
          ],
        };
      }
      if (proj.id === 'stelifo-platform') {
        return {
          ...proj,
          title: 'Stelifo — SaaS 与 B2B Web/移动端平台',
          category: 'Web 与云端',
          description: '具备用于业务自动化工作流的 Web 和移动应用的数字化转型 SaaS。',
          projectType: 'SaaS / B2B Web 与移动端平台',
          database: 'Supabase (PostgreSQL)',
          highlights: [
            '基于 React Native 构建的 Web 应用平台与跨平台移动应用。',
            '集成 Stripe 订阅支付、Resend.com 事务邮件与 Vercel 托管。',
          ],
        };
      }
      if (proj.id === 'vibe-ai') {
        return {
          ...proj,
          title: 'Vibe AI — 智能工作区助手',
          category: 'Web 与云端',
          description: '由生成式 AI 模型驱动的 AI 内容与生产力引擎。',
          projectType: 'SaaS / AI 产品',
          database: 'Supabase (PostgreSQL)',
          highlights: [
            '集成用于提示词生成与代码重构的 LLM API 流。',
            '基于高性能 Next.js App Router 架构部署于 Vercel。',
          ],
        };
      }
      if (proj.id === 'kryterion-engine') {
        return {
          ...proj,
          title: 'Webassessor — Kryterion 在线考试交付平台',
          category: '企业级与自动化',
          description: '同时服务全球考生的高并发在线考试与监考系统。',
          projectType: '企业级考试评估平台',
          database: 'MariaDB + Redis 缓存',
          highlights: [
            '扩展具有高并发考试会话状态的核心评估交付引擎。',
            '构建支持全球考生无缝无刷切换语言的多语言国际化 (i18n) 与动态本地化引擎。',
            '使用 Vue.js、Bootstrap 和 Tailwind CSS 构建符合 WCAG 无障碍标准的响应式 Web 界面。',
          ],
        };
      }
    }

    return proj;
  });
}

export function getEducation(locale: Locale): Education[] {
  if (locale === 'en') return EDUCATION;

  return EDUCATION.map((edu) => {
    if (locale === 'ja') {
      if (edu.id === 'msit') {
        return {
          ...edu,
          degree: '情報技術修士 (MS IT)',
          institution: 'アテネオ・デ・ナガ大学',
          period: '2023年 — 現在',
          location: 'フィリピン ナガ市',
          badge: '在学中 (修士候補)',
          details: 'ソフトウェアエンジニアリングアーキテクチャ、エンタープライズシステム、ITマネジメントの高度な履修。',
        };
      }
      if (edu.id === 'bsit') {
        return {
          ...edu,
          degree: '情報技術学士 (BS IT)',
          institution: 'パルティード州立大学',
          period: '2012年 — 2016年',
          location: 'フィリピン カマリネス・スル州',
          badge: '卒業',
          details: 'コンピュータサイエンス、データ構造、アルゴリズムプログラミングの強固な基礎を修得し卒業。',
        };
      }
    }

    if (locale === 'es') {
      if (edu.id === 'msit') {
        return {
          ...edu,
          degree: 'Maestría en Tecnologías de la Información (MS IT)',
          institution: 'Universidad Ateneo de Naga',
          period: '2023 — Presente',
          location: 'Ciudad de Naga, Filipinas',
          badge: 'Candidato a Graduado',
          details: 'Cursos avanzados en Arquitectura de Ingeniería de Software, Sistemas Empresariales y Gestión de TI.',
        };
      }
      if (edu.id === 'bsit') {
        return {
          ...edu,
          degree: 'Licenciatura en Tecnologías de la Información (BS IT)',
          institution: 'Universidad Estatal de Partido',
          period: '2012 — 2016',
          location: 'Camarines Sur, Filipinas',
          badge: 'Graduado',
          details: 'Graduado con sólidas bases en Ciencias de la Computación, Estructuras de Datos y Programación Algorítmica.',
        };
      }
    }

    if (locale === 'fil') {
      if (edu.id === 'msit') {
        return {
          ...edu,
          degree: 'Master of Science in Information Technology (MS IT)',
          institution: 'Ateneo de Naga University',
          badge: 'Kandidato sa Graduate School',
          period: '2023 — Kasalukuyan',
          location: 'Lungsod ng Naga, Pilipinas',
          details: 'Advanced na pag-aaral sa Software Engineering Architecture, Enterprise Systems, at IT Management.',
        };
      }
      if (edu.id === 'bsit') {
        return {
          ...edu,
          degree: 'Bachelor of Science in Information Technology (BS IT)',
          institution: 'Partido State University',
          badge: 'Nagtapos',
          period: '2012 — 2016',
          location: 'Camarines Sur, Pilipinas',
          details: 'Nagtapos na may matibay na pundasyon sa Computer Science, Data Structures, at Algorithmic Programming.',
        };
      }
    }

    if (locale === 'de') {
      if (edu.id === 'msit') {
        return {
          ...edu,
          degree: 'Master of Science in Information Technology (MS IT)',
          institution: 'Ateneo de Naga Universität',
          period: '2023 — Heute',
          location: 'Naga City, Philippinen',
          badge: 'Masterkandidat',
          details: 'Fortgeschrittene Kurse in Software-Engineering-Architektur, Enterprise-Systemen und IT-Management.',
        };
      }
      if (edu.id === 'bsit') {
        return {
          ...edu,
          degree: 'Bachelor of Science in Information Technology (BS IT)',
          institution: 'Partido Staatsuniversität',
          period: '2012 — 2016',
          location: 'Camarines Sur, Philippinen',
          badge: 'Absolviert',
          details: 'Abschluss mit solider Grundlage in Informatik, Datenstrukturen und algorithmischer Programmierung.',
        };
      }
    }

    if (locale === 'ko') {
      if (edu.id === 'msit') {
        return {
          ...edu,
          degree: '정보기술 석사 (MS IT)',
          institution: '아테네오 데 나가 대학교',
          period: '2023년 — 현재',
          location: '필리핀 나가 시',
          badge: '재학 중 (석사 과정)',
          details: '소프트웨어 엔지니어링 아키텍처, 엔터프라이즈 시스템 및 IT 관리에 대한 심화 과목 이수.',
        };
      }
      if (edu.id === 'bsit') {
        return {
          ...edu,
          degree: '정보기술 학사 (BS IT)',
          institution: '파르티도 주립 대학교',
          period: '2012년 — 2016년',
          location: '필리핀 카마리네스 수르',
          badge: '졸업',
          details: '컴퓨터 과학, 데이터 구조 및 알고리즘 프로그래밍에 대한 탄탄한 기초를 바탕으로 졸업.',
        };
      }
    }

    if (locale === 'zh') {
      if (edu.id === 'msit') {
        return {
          ...edu,
          degree: '信息技术硕士 (MS IT)',
          institution: '雅典耀纳加大学',
          period: '2023年 — 至今',
          location: '菲律宾 纳加市',
          badge: '攻读中 (硕士候选人)',
          details: '高级软件工程架构、企业级系统与 IT 管理课程。',
        };
      }
      if (edu.id === 'bsit') {
        return {
          ...edu,
          degree: '信息技术学士 (BS IT)',
          institution: '巴蒂多州立大学',
          period: '2012年 — 2016年',
          location: '菲律宾 卡马林斯州',
          badge: '已毕业',
          details: '具备扎实的计算机科学、数据结构和算法编程基础并顺利毕业。',
        };
      }
    }

    return edu;
  });
}

export function getAchievements(locale: Locale): Achievement[] {
  if (locale === 'en') return ACHIEVEMENTS;

  return ACHIEVEMENTS.map((ach) => {
    if (locale === 'ja') {
      if (ach.id === 'acm-icpc') {
        return {
          ...ach,
          title: 'ACM-ICPC フィリピン代表コンテスト出場者',
          organization: 'ACM 国際大学対抗プログラミングコンテスト',
          description: '権威あるACM-ICPCアルゴリズムプログラミングコンテストにてパルティード州立大学代表として選出。',
        };
      }
      if (ach.id === 'team-lead-kryterion') {
        return {
          ...ach,
          title: 'エンジニアリング チームリード昇格',
          organization: 'Kryterion 社',
          description: 'Webassessorプラットフォームのフルスタック開発チームリードに昇格。アーキテクチャ、多言語ローカライゼーション(i18n)、KPI、人事評価を担当。',
        };
      }
    }

    if (locale === 'es') {
      if (ach.id === 'acm-icpc') {
        return {
          ...ach,
          title: 'Concursante Nacional ACM-ICPC Filipinas',
          organization: 'Concurso Internacional Colegial de Programación ACM',
          description: 'Seleccionado como concursante nacional representando a la Universidad Estatal de Partido en la prestigiosa competición de programación algorítmica ACM-ICPC.',
        };
      }
      if (ach.id === 'team-lead-kryterion') {
        return {
          ...ach,
          title: 'Promoción a Líder de Equipo de Ingeniería',
          organization: 'Kryterion, Inc.',
          description: 'Promovido para liderar el equipo de ingeniería full-stack de la plataforma Webassessor.',
        };
      }
    }

    if (locale === 'fil') {
      if (ach.id === 'acm-icpc') {
        return {
          ...ach,
          title: 'ACM-ICPC Philippine National Contestant',
          organization: 'ACM International Collegiate Programming Contest',
          description: 'Pinili bilang pambansang kalahok na kumakatawan sa Partido State University sa prestihiyosong ACM-ICPC algorithmic programming competition.',
        };
      }
      if (ach.id === 'team-lead-kryterion') {
        return {
          ...ach,
          title: 'Promoted to Engineering Team Lead',
          organization: 'Kryterion, Inc.',
          description: 'Naitaas bilang lider ng full-stack engineering team para sa Webassessor platform, nangangasiwa sa arkitektura, team KPIs, at performance appraisals.',
        };
      }
    }

    if (locale === 'de') {
      if (ach.id === 'acm-icpc') {
        return {
          ...ach,
          title: 'ACM-ICPC Philippinischer Nationaler Teilnehmer',
          organization: 'ACM Internationaler Kollegialer Programmierwettbewerb',
          description: 'Ausgewählt als nationaler Teilnehmer zur Vertretung der Partido Staatsuniversität beim renommierten ACM-ICPC Algorithmen-Wettbewerb.',
        };
      }
      if (ach.id === 'team-lead-kryterion') {
        return {
          ...ach,
          title: 'Beförderung zum Engineering Team Lead',
          organization: 'Kryterion, Inc.',
          description: 'Befördert zur Leitung des Full-Stack-Entwicklungsteams der Webassessor-Plattform mit Verantwortung für Architektur, KPIs und Leistungsbeurteilungen.',
        };
      }
    }

    if (locale === 'ko') {
      if (ach.id === 'acm-icpc') {
        return {
          ...ach,
          title: 'ACM-ICPC 필리핀 국가대표 참가자',
          organization: 'ACM 국제 대학생 프로그래밍 경시 대회',
          description: '권위 있는 ACM-ICPC 알고리즘 프로그래밍 경진대회에서 파르티도 주립 대학교 대표로 선정.',
        };
      }
      if (ach.id === 'team-lead-kryterion') {
        return {
          ...ach,
          title: '엔지니어링 팀 리드 승진',
          organization: 'Kryterion, Inc.',
          description: 'Webassessor 플랫폼의 풀스택 엔지니어링 팀 리드로 승진하여 아키텍처, 다국어 로컬라이제이션(i18n), KPI 및 성과 평가 총괄.',
        };
      }
    }

    if (locale === 'zh') {
      if (ach.id === 'acm-icpc') {
        return {
          ...ach,
          title: 'ACM-ICPC 菲律宾国家级参赛者',
          organization: 'ACM 国际大学生程序设计竞赛',
          description: '代表巴蒂多州立大学入选参加著名的 ACM-ICPC 算法程序设计竞赛。',
        };
      }
      if (ach.id === 'team-lead-kryterion') {
        return {
          ...ach,
          title: '工程团队负责人晋升',
          organization: 'Kryterion, Inc.',
          description: '获晋升领导 Webassessor 平台的全栈工程团队，掌控架构、多语言本地化 (i18n)、团队 KPI 与绩效评估。',
        };
      }
    }

    return ach;
  });
}
