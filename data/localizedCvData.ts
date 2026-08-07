import { Locale } from '@/types/i18n';
import { Experience, Project, SkillCategory, Education, Achievement } from '@/types/portfolio';
import { EXPERIENCES, PROJECTS, SKILL_CATEGORIES, EDUCATION, ACHIEVEMENTS } from './cvData';

// Localized helper to translate dynamic data content seamlessly across all 7 languages

export function getExperiences(locale: Locale): Experience[] {
  if (locale === 'en') return EXPERIENCES;

  return EXPERIENCES.map((exp) => {
    if (locale === 'es') {
      if (exp.id === 'kryterion-lead') {
        return {
          ...exp,
          role: 'Líder de Equipo de Ingeniería de Software',
          location: 'Remoto / Ciudad de Naga, Filipinas',
          period: 'Oct 2024 — Presente',
          summary: 'Liderando la ejecución del equipo de ingeniería, escalado arquitectónico y desarrollo full-stack para la plataforma Webassessor en web y móvil.',
          responsibilities: [
            'Liderar el diseño, desarrollo y escalado de la plataforma de evaluación en línea Webassessor en web y móvil utilizando Java (Spring Boot), MariaDB, SQL, Vue.js, Next.js, Tailwind CSS, Bootstrap, Flutter y React Native (iOS y Android).',
            'Brindar liderazgo técnico y orientación arquitectónica para garantizar un alto rendimiento, seguridad, accesibilidad web WCAG AAA y escalabilidad.',
            'Mentorear ingenieros de software a través de sesiones 1 a 1, revisiones de desempeño y planificación de carrera.',
            'Coordinar con equipos multidisciplinarios (Producto, Diseñadores UI/UX, QA, DevOps, CTO) para alinear prioridades.',
            'Fomentar metodologías Ágiles, mejorando flujos de trabajo, planificación de sprints y eficiencia de entrega.',
          ],
        };
      }
      if (exp.id === 'kryterion-engineer') {
        return {
          ...exp,
          role: 'Ingeniero de Software (Full Stack)',
          location: 'Remoto / Ciudad de Naga, Filipinas',
          period: 'Nov 2023 — Oct 2024',
          summary: 'Ingeniería full-stack para la plataforma Webassessor, microservicios e integraciones de API seguras.',
        };
      }
      if (exp.id === 'caceres-fullstack') {
        return {
          ...exp,
          role: 'Desarrollador Full Stack',
          location: 'Ciudad de Naga, Filipinas',
          period: 'Sept 2021 — Nov 2023',
          summary: 'Diseño y despliegue de sistemas web y móviles full-stack, arquitecturas de bases de datos y herramientas automatizadas.',
        };
      }
      if (exp.id === 'caceres-system') {
        return {
          ...exp,
          role: 'Desarrollador de Sistemas',
          location: 'Ciudad de Naga, Filipinas',
          period: 'Dic 2016 — Ago 2021',
          summary: 'Construcción de software administrativo, automatización de procesos y sistemas de bases de datos.',
        };
      }
    }

    if (locale === 'fil') {
      if (exp.id === 'kryterion-lead') {
        return {
          ...exp,
          role: 'Software Engineering Team Lead',
          location: 'Remote / Lungsod ng Naga, Pilipinas',
          period: 'Okt 2024 — Kasalukuyan',
          summary: 'Pinamumunuan ang inhinyerya, arkitektura, at full-stack development para sa Webassessor platform sa web at mobile.',
        };
      }
      if (exp.id === 'kryterion-engineer') {
        return {
          ...exp,
          role: 'Software Engineer (Full Stack)',
          location: 'Remote / Lungsod ng Naga, Pilipinas',
          period: 'Nob 2023 — Okt 2024',
          summary: 'Full-stack engineering para sa Webassessor platform, microservices, at ligtas na API integrations.',
        };
      }
      if (exp.id === 'caceres-fullstack') {
        return {
          ...exp,
          role: 'Full Stack Developer',
          location: 'Lungsod ng Naga, Pilipinas',
          period: 'Set 2021 — Nob 2023',
        };
      }
      if (exp.id === 'caceres-system') {
        return {
          ...exp,
          role: 'System Developer',
          location: 'Lungsod ng Naga, Pilipinas',
          period: 'Dis 2016 — Ago 2021',
        };
      }
    }

    if (locale === 'de') {
      if (exp.id === 'kryterion-lead') {
        return {
          ...exp,
          role: 'Software Engineering Team Lead',
          location: 'Remote / Naga City, Philippinen',
          period: 'Okt 2024 — Heute',
          summary: 'Leitung der Ausführung des Entwicklungsteams, der architektonischen Skalierung und der Full-Stack-Entwicklung für die Webassessor-Plattform auf Web und Mobile.',
        };
      }
      if (exp.id === 'kryterion-engineer') {
        return {
          ...exp,
          role: 'Software Engineer (Full Stack)',
          location: 'Remote / Naga City, Philippinen',
          period: 'Nov 2023 — Okt 2024',
        };
      }
      if (exp.id === 'caceres-fullstack') {
        return {
          ...exp,
          location: 'Naga City, Philippinen',
          period: 'Sept 2021 — Nov 2023',
        };
      }
      if (exp.id === 'caceres-system') {
        return {
          ...exp,
          location: 'Naga City, Philippinen',
          period: 'Dez 2016 — Aug 2021',
        };
      }
    }

    if (locale === 'ja') {
      if (exp.id === 'kryterion-lead') {
        return {
          ...exp,
          role: 'ソフトウェアエンジニアリング チームリード',
          location: 'リモート / フィリピン ナガ市',
          period: '2024年10月 — 現在',
          summary: 'WebおよびモバイルにわたるWebassessor試験配信プラットフォームの開発チーム統括、アーキテクチャ拡張、フルスタック開発を牽引。',
          responsibilities: [
            'Java (Spring Boot)、MariaDB、Vue.js、Next.js、Tailwind CSS、Flutter、React Nativeを用いたWebassessorの設計・開発・拡張の統括。',
            'グローバルな試験セッションにおける高性能、セキュリティ、WCAG AAAアクセシビリティ、拡張性を確保する技術指導。',
            '定期的な1対1の面談、人事評価、キャリア開発計画を通じたエンジニアの育成。',
            'プロダクト、UI/UX、QA、DevOps、CTOなどのクロスファンクショナルチームとの連携。',
            'アジャイル開発の推進によるスプリント計画と配信効率の向上。',
          ],
        };
      }
      if (exp.id === 'kryterion-engineer') {
        return {
          ...exp,
          role: 'フルスタック ソフトウェアエンジニア',
          location: 'リモート / フィリピン ナガ市',
          period: '2023年11月 — 2024年10月',
          summary: 'Webassessorプラットフォーム、マイクロサービス、セキュアなAPI連携のフルスタック開発。',
        };
      }
      if (exp.id === 'caceres-fullstack') {
        return {
          ...exp,
          role: 'フルスタックWeb & モバイルデベロッパー',
          location: 'フィリピン ナガ市',
          period: '2021年9月 — 2023年11月',
          summary: 'フルスタックWeb・モバイルシステム、データベース設計、自動化ツールの設計および運用。',
        };
      }
      if (exp.id === 'caceres-system') {
        return {
          ...exp,
          role: 'システムデベロッパー',
          location: 'フィリピン ナガ市',
          period: '2016年12月 — 2021年8月',
          summary: '管理ソフトウェア開発、プロセス自動化、データベースシステムの構築。',
        };
      }
    }

    if (locale === 'ko') {
      if (exp.id === 'kryterion-lead') {
        return {
          ...exp,
          role: '소프트웨어 엔지니어링 팀 리드',
          location: '원격 / 필리핀 나가 시',
          period: '2024년 10월 — 현재',
          summary: '웹 및 모바일 플랫폼 Webassessor의 엔지니어링 팀 실행, 아키텍처 확장 및 풀스택 개발 주도.',
        };
      }
      if (exp.id === 'kryterion-engineer') {
        return {
          ...exp,
          role: '풀스택 소프트웨어 엔지니어',
          location: '원격 / 필리핀 나가 시',
          period: '2023년 11월 — 2024년 10월',
        };
      }
      if (exp.id === 'caceres-fullstack') {
        return {
          ...exp,
          role: '풀스택 개발자',
          location: '필리핀 나가 시',
          period: '2021년 9월 — 2023년 11월',
        };
      }
      if (exp.id === 'caceres-system') {
        return {
          ...exp,
          role: '시스템 개발자',
          location: '필리핀 나가 시',
          period: '2016年 12月 — 2021年 8月',
        };
      }
    }

    if (locale === 'zh') {
      if (exp.id === 'kryterion-lead') {
        return {
          ...exp,
          role: '软件工程团队负责人',
          location: '远程 / 菲律宾 纳加市',
          period: '2024年10月 — 至今',
          summary: '领导 Web 和移动端 Webassessor 考试交付平台的工程团队执行、架构扩展及全栈开发。',
        };
      }
      if (exp.id === 'kryterion-engineer') {
        return {
          ...exp,
          role: '全栈软件工程师',
          location: '远程 / 菲律宾 纳加市',
          period: '2023年11月 — 2024年10月',
        };
      }
      if (exp.id === 'caceres-fullstack') {
        return {
          ...exp,
          role: '全栈开发人员',
          location: '菲律宾 纳加市',
          period: '2021年9月 — 2023年11月',
        };
      }
      if (exp.id === 'caceres-system') {
        return {
          ...exp,
          role: '系统开发人员',
          location: '菲律宾 纳加市',
          period: '2016年12月 — 2021年8月',
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
          description: 'クラウドネイティブの自動ソフトウェアテストおよびQAワークフロー管理システム。',
          projectType: 'SaaS / B2B プラットフォーム',
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
          description: '業務自動化ワークフローのためのWebおよびモバイルアプリを備えたデジタル変革SaaS。',
          projectType: 'SaaS / B2B Web & モバイル',
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
          description: '生成AIモデルを搭載したAI駆動のコンテンツおよび生産性向上エンジン。',
          projectType: 'SaaS / AI プロダクト',
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
          description: '世界中の受験者に同時に対応する高コンカレンシーのオンライン試験・監視システム。',
          projectType: 'エンタープライズ試験プラットフォーム',
          highlights: [
            '高コンカレンシーの試験セッション状態を持つコア評価配信エンジンを拡張。',
            'Vue.js、Bootstrap、Tailwind CSSを使用し、WCAGアクセシビリティ規格に準拠したWebUIを構築。',
          ],
        };
      }
    }

    if (locale === 'es') {
      if (proj.id === 'qapione-saas') {
        return {
          ...proj,
          projectType: 'Plataforma SaaS / B2B',
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
          projectType: 'Plataforma Web y Móvil SaaS / B2B',
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
          projectType: 'Producto SaaS / IA',
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
          projectType: 'Plataforma Empresarial de Evaluación',
          description: 'Plataforma global de evaluación en línea e inspección de exámenes de alta concurrencia.',
          highlights: [
            'Motor de evaluación central escalado con estado de sesión de examen de alta concurrencia.',
            'Interfaces web responsivas con Vue.js, Bootstrap, Tailwind CSS y estándares WCAG.',
          ],
        };
      }
    }

    if (locale === 'fil') {
      if (proj.id === 'qapione-saas') {
        return {
          ...proj,
          highlights: [
            'Multi-tenant SaaS na may Supabase PostgreSQL, Stripe payments, at Row Level Security.',
            'Awtomatikong pagpapatakbo ng test suite, real-time dashboards, at Vercel cloud hosting.',
          ],
        };
      }
      if (proj.id === 'stelifo-platform') {
        return {
          ...proj,
          highlights: [
            'Web application platform at cross-platform mobile app na binuo gamit ang React Native.',
            'Integrated Stripe subscription payments, Resend.com emails, at Vercel hosting.',
          ],
        };
      }
      if (proj.id === 'vibe-ai') {
        return {
          ...proj,
          highlights: [
            'Pinagsamang LLM API streams para sa prompt generation at code refactoring.',
            'Naka-deploy sa Vercel gamit ang mabilis na Next.js App Router architecture.',
          ],
        };
      }
      if (proj.id === 'kryterion-engine') {
        return {
          ...proj,
          highlights: [
            'Pinalawak ang core assessment engine para sa maraming sabay-sabay na kumuha ng pagsusulit.',
            'Bumuo ng responsive web UI gamit ang Vue.js, Bootstrap, at Tailwind CSS na may WCAG standards.',
          ],
        };
      }
    }

    if (locale === 'de') {
      if (proj.id === 'qapione-saas') {
        return {
          ...proj,
          highlights: [
            'Multi-Tenant-SaaS mit Supabase PostgreSQL, Stripe-Zahlungen und Row Level Security.',
            'Automatische Testausführung, Echtzeit-Ergebnis-Dashboards und Vercel-Cloud-Hosting.',
          ],
        };
      }
      if (proj.id === 'stelifo-platform') {
        return {
          ...proj,
          highlights: [
            'Webanwendungs-Plattform und plattformübergreifende mobile App entwickelt mit React Native.',
            'Integrierte Stripe-Abonnementzahlungen, Resend.com-E-Mails und Vercel-Hosting.',
          ],
        };
      }
      if (proj.id === 'vibe-ai') {
        return {
          ...proj,
          highlights: [
            'Integrierte LLM-API-Streams für Prompt-Generierung und Code-Refactoring.',
            'Bereitgestellt auf Vercel mit leistungsstarker Next.js App Router-Architektur.',
          ],
        };
      }
      if (proj.id === 'kryterion-engine') {
        return {
          ...proj,
          highlights: [
            'Skalierte zentrale Bewertungsengine mit hochparallelem Prüfungsstatus.',
            'Responsive Web-Benutzeroberflächen mit Vue.js, Bootstrap, Tailwind CSS und WCAG-Standards entwickelt.',
          ],
        };
      }
    }

    if (locale === 'ko') {
      if (proj.id === 'qapione-saas') {
        return {
          ...proj,
          projectType: 'SaaS / B2B 플랫폼',
          highlights: [
            'Supabase PostgreSQL, Stripe 결제 및 행 수준 보안(RLS)을 갖춘 멀티테넌트 SaaS.',
            '자동화된 테스트 실행, 실시간 결과 대시보드 및 Vercel 클라우드 호스팅.',
          ],
        };
      }
      if (proj.id === 'stelifo-platform') {
        return {
          ...proj,
          projectType: 'SaaS / B2B 웹 및 모바일 플랫폼',
          highlights: [
            'React Native로 구축된 웹 애플리케이션 플랫폼 및 교차 플랫폼 모바일 앱.',
            'Stripe 구독 결제, Resend.com 이메일 및 Vercel 호스팅 통합.',
          ],
        };
      }
      if (proj.id === 'vibe-ai') {
        return {
          ...proj,
          projectType: 'SaaS / AI 제품',
          highlights: [
            '프롬프트 생성 및 코드 리팩토링을 위한 LLM API 스트림 통합.',
            '고성능 Next.js App Router 아키텍처로 Vercel에 배포.',
          ],
        };
      }
      if (proj.id === 'kryterion-engine') {
        return {
          ...proj,
          projectType: '엔터프라이즈 평가 플랫폼',
          highlights: [
            '고동시성 시험 세션 상태를 갖춘 핵심 평가 전달 엔진 확장.',
            'Vue.js, Bootstrap, Tailwind CSS를 사용하고 WCAG 접근성 표준을 준수한 웹 UI 구축.',
          ],
        };
      }
    }

    if (locale === 'zh') {
      if (proj.id === 'qapione-saas') {
        return {
          ...proj,
          projectType: 'SaaS / B2B 平台',
          highlights: [
            '具备 Supabase PostgreSQL、Stripe 支付及行级安全 (RLS) 的多租户 SaaS。',
            '自动化测试套件执行、实时结果仪表板与 Vercel 云端托管。',
          ],
        };
      }
      if (proj.id === 'stelifo-platform') {
        return {
          ...proj,
          projectType: 'SaaS / B2B Web 与移动端平台',
          highlights: [
            '基于 React Native 构建的 Web 应用平台与跨平台移动应用。',
            '集成 Stripe 订阅支付、Resend.com 事务邮件与 Vercel 托管。',
          ],
        };
      }
      if (proj.id === 'vibe-ai') {
        return {
          ...proj,
          projectType: 'SaaS / AI 产品',
          highlights: [
            '集成用于提示词生成与代码重构的 LLM API 流。',
            '基于高性能 Next.js App Router 架构部署于 Vercel。',
          ],
        };
      }
      if (proj.id === 'kryterion-engine') {
        return {
          ...proj,
          projectType: '企业级考试评估平台',
          highlights: [
            '扩展具有高并发考试会话状态的核心评估交付引擎。',
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
          badge: 'Kandidato sa Graduate School',
          period: '2023 — Kasalukuyan',
          location: 'Lungsod ng Naga, Pilipinas',
        };
      }
      if (edu.id === 'bsit') {
        return {
          ...edu,
          badge: 'Nagtapos',
          location: 'Camarines Sur, Pilipinas',
        };
      }
    }

    if (locale === 'de') {
      if (edu.id === 'msit') {
        return {
          ...edu,
          period: '2023 — Heute',
          location: 'Naga City, Philippinen',
          badge: 'Masterkandidat',
        };
      }
      if (edu.id === 'bsit') {
        return {
          ...edu,
          location: 'Camarines Sur, Philippinen',
          badge: 'Absolviert',
        };
      }
    }

    if (locale === 'ko') {
      if (edu.id === 'msit') {
        return {
          ...edu,
          degree: '정보기술 석사 (MS IT)',
          period: '2023년 — 현재',
          location: '필리핀 나가 시',
          badge: '재학 중 (석사 과정)',
        };
      }
      if (edu.id === 'bsit') {
        return {
          ...edu,
          degree: '정보기술 학사 (BS IT)',
          period: '2012년 — 2016년',
          location: '필리핀 카마리네스 수르',
          badge: '졸업',
        };
      }
    }

    if (locale === 'zh') {
      if (edu.id === 'msit') {
        return {
          ...edu,
          degree: '信息技术硕士 (MS IT)',
          period: '2023年 — 至今',
          location: '菲律宾 纳加市',
          badge: '攻读中 (硕士候选人)',
        };
      }
      if (edu.id === 'bsit') {
        return {
          ...edu,
          degree: '信息技术学士 (BS IT)',
          period: '2012年 — 2016年',
          location: '菲律宾 卡马林斯州',
          badge: '已毕业',
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
          description: 'Webassessorプラットフォームのフルスタック開発チームリードに昇格。アーキテクチャ、KPI、人事評価を担当。',
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
        };
      }
    }

    if (locale === 'de') {
      if (ach.id === 'acm-icpc') {
        return {
          ...ach,
          title: 'ACM-ICPC Philippinischer Nationaler Teilnehmer',
          organization: 'ACM Internationaler Kollegialer Programmierwettbewerb',
        };
      }
    }

    if (locale === 'ko') {
      if (ach.id === 'acm-icpc') {
        return {
          ...ach,
          title: 'ACM-ICPC 필리핀 국가대표 참가자',
          organization: 'ACM 국제 대학생 프로그래밍 경시 대회',
        };
      }
      if (ach.id === 'team-lead-kryterion') {
        return {
          ...ach,
          title: '엔지니어링 팀 리드 승진',
          organization: 'Kryterion, Inc.',
        };
      }
    }

    if (locale === 'zh') {
      if (ach.id === 'acm-icpc') {
        return {
          ...ach,
          title: 'ACM-ICPC 菲律宾国家级参赛者',
          organization: 'ACM 国际大学生程序设计竞赛',
        };
      }
      if (ach.id === 'team-lead-kryterion') {
        return {
          ...ach,
          title: '工程团队负责人晋升',
          organization: 'Kryterion, Inc.',
        };
      }
    }

    return ach;
  });
}
