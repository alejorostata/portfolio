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
          summary: 'Ingeniería full-stack para la plataforma Webassessor, microservicios e integraciones de API seguras.',
        };
      }
      if (exp.id === 'caceres-fullstack') {
        return {
          ...exp,
          role: 'Desarrollador Full Stack',
          summary: 'Diseño y despliegue de sistemas web y móviles full-stack, arquitecturas de bases de datos y herramientas automatizadas.',
        };
      }
      if (exp.id === 'caceres-system') {
        return {
          ...exp,
          role: 'Desarrollador de Sistemas',
          summary: 'Construcción de software administrativo, automatización de procesos y sistemas de bases de datos.',
        };
      }
    }

    if (locale === 'fil') {
      if (exp.id === 'kryterion-lead') {
        return {
          ...exp,
          role: 'Software Engineering Team Lead',
          period: 'Okt 2024 — Kasalukuyan',
          summary: 'Pinamumunuan ang inhinyerya, arkitektura, at full-stack development para sa Webassessor platform sa web at mobile.',
        };
      }
      if (exp.id === 'kryterion-engineer') {
        return {
          ...exp,
          role: 'Software Engineer (Full Stack)',
          summary: 'Full-stack engineering para sa Webassessor platform, microservices, at ligtas na API integrations.',
        };
      }
    }

    if (locale === 'ja') {
      if (exp.id === 'kryterion-lead') {
        return {
          ...exp,
          role: 'ソフトウェアエンジニアリング チームリード',
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
          summary: 'Webassessorプラットフォーム、マイクロサービス、セキュアなAPI連携のフルスタック開発。',
        };
      }
      if (exp.id === 'caceres-fullstack') {
        return {
          ...exp,
          role: 'フルスタックWeb & モバイルデベロッパー',
          summary: 'フルスタックWeb・モバイルシステム、データベース設計、自動化ツールの設計および運用。',
        };
      }
      if (exp.id === 'caceres-system') {
        return {
          ...exp,
          role: 'システムデベロッパー',
          summary: '管理ソフトウェア開発、プロセス自動化、データベースシステムの構築。',
        };
      }
    }

    if (locale === 'ko') {
      if (exp.id === 'kryterion-lead') {
        return {
          ...exp,
          role: '소프트웨어 엔지니어링 팀 리드',
          period: '2024년 10월 — 현재',
          summary: '웹 및 모바일 플랫폼 Webassessor의 엔지니어링 팀 실행, 아키텍처 확장 및 풀스택 개발 주도.',
        };
      }
    }

    if (locale === 'zh') {
      if (exp.id === 'kryterion-lead') {
        return {
          ...exp,
          role: '软件工程团队负责人',
          period: '2024年10月 — 至今',
          summary: '领导 Web 和移动端 Webassessor 考试交付平台的工程团队执行、架构扩展及全栈开发。',
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
        };
      }
      if (proj.id === 'stelifo-platform') {
        return {
          ...proj,
          title: 'Stelifo — SaaS & B2B Web・モバイルプラットフォーム',
          description: '業務自動化ワークフローのためのWebおよびモバイルアプリを備えたデジタル変革SaaS。',
          projectType: 'SaaS / B2B Web & モバイル',
        };
      }
      if (proj.id === 'vibe-ai') {
        return {
          ...proj,
          title: 'Vibe AI — インテリジェント ワークスペース アシスタント',
          description: '生成AIモデルを搭載したAI駆動のコンテンツおよび生産性向上エンジン。',
          projectType: 'SaaS / AI プロダクト',
        };
      }
      if (proj.id === 'kryterion-engine') {
        return {
          ...proj,
          title: 'Webassessor — Kryterion オンライン試験配信プラットフォーム',
          description: '世界中の受験者に同時に対応する高コンカレンシーのオンライン試験・監視システム。',
          projectType: 'エンタープライズ試験プラットフォーム',
        };
      }
    }

    if (locale === 'es') {
      if (proj.id === 'qapione-saas') {
        return {
          ...proj,
          description: 'Gestor automatizado de pruebas de software y flujo de trabajo de control de calidad nativo de la nube.',
        };
      }
      if (proj.id === 'vibe-ai') {
        return {
          ...proj,
          description: 'Motor de contenido y productividad impulsado por modelos de inteligencia artificial generativa.',
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
          badge: 'Candidato a Graduado',
          details: 'Cursos avanzados en Arquitectura de Ingeniería de Software, Sistemas Empresariales y Gestión de TI.',
        };
      }
      if (edu.id === 'bsit') {
        return {
          ...edu,
          degree: 'Licenciatura en Tecnologías de la Información (BS IT)',
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
        };
      }
      if (edu.id === 'bsit') {
        return {
          ...edu,
          badge: 'Nagtapos',
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
          description: '権威あるACM-ICPCアルゴリズムプログラミングコンテストにてパルティード州立大学代表として選出。',
        };
      }
      if (ach.id === 'team-lead-kryterion') {
        return {
          ...ach,
          title: 'エンジニアリング チームリード昇格',
          description: 'Webassessorプラットフォームのフルスタック開発チームリードに昇格。アーキテクチャ、KPI、人事評価を担当。',
        };
      }
    }

    if (locale === 'es') {
      if (ach.id === 'acm-icpc') {
        return {
          ...ach,
          title: 'Concursante Nacional ACM-ICPC Filipinas',
          description: 'Seleccionado como concursante nacional representando a la Universidad Estatal de Partido en la prestigiosa competición de programación algorítmica ACM-ICPC.',
        };
      }
      if (ach.id === 'team-lead-kryterion') {
        return {
          ...ach,
          title: 'Promoción a Líder de Equipo de Ingeniería',
          description: 'Promovido para liderar el equipo de ingeniería full-stack de la plataforma Webassessor.',
        };
      }
    }

    return ach;
  });
}
