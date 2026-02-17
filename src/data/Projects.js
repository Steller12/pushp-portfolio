export const projects = [
  {
    slug: "inkr",
    title: "Inkr",
    category: "Real-Time Systems",
    client: "Personal Project",
    year: 2025,

    tagline:
      "Real-time collaborative whiteboard with shared state synchronization.",

    description: `
Inkr is a real-time collaborative whiteboard designed to support concurrent
multi-user interactions with low latency and consistent shared state.

The system enables multiple users to draw simultaneously while maintaining
synchronization across clients, with an emphasis on event-driven communication,
session isolation, and rendering performance.
    `,

    tech: [
      "React",
      "Node.js",
      "Express.js",
      "WebSockets",
      "MongoDB",
      "HTML5 Canvas",
    ],

    architecture: [
      "Server-authoritative state model to ensure consistent shared canvas state",
      "Room-based session management to isolate collaborative boards",
      "WebSocket-based event propagation for real-time updates",
      "Optimized canvas redraw strategy to reduce unnecessary rendering",
    ],

    challenges: [
      "Managing concurrent drawing inputs from multiple users",
      "Maintaining consistent canvas state during rapid updates",
      "Handling out-of-order events in real-time communication",
      "Debugging issues related to shared, stateful interactions",
    ],

    github: "https://github.com/Steller12/inkr",
    demo: null,
  },
  {
    slug: "legal-document-generator",
    title: "Legal Document Generator",
    category: "AI / Document Automation",
    client: "Academic Project",
    year: 2025,

    tagline:
      "AI-assisted system for generating structured legal documents from user-defined parameters.",

    description: `
The Legal Document Generator is an AI-assisted application designed to help users
draft common legal agreements through a guided, parameter-driven workflow.

The system generates structured and customizable legal documents based on
explicit user inputs such as jurisdiction, involved parties, duration, and
special clauses, with a focus on document consistency and usability.
  `,

    tech: [
      "Python",
      "Streamlit",
      "Google Gemini API",
      "Large Language Models (LLMs)",
    ],

    architecture: [
      "Form-based input system for collecting structured legal parameters",
      "Prompt-driven document generation using controlled templates",
      "Support for multiple legal document types such as NDAs and contracts",
      "Environment-based configuration for secure API credential handling",
    ],

    challenges: [
      "Designing prompts that produce predictable and well-structured documents",
      "Balancing flexibility with controlled output formatting",
      "Handling sensitive user inputs safely",
      "Maintaining a simple interface for complex legal requirements",
    ],

    github: "https://github.com/Steller12/legal-chatbot",
    demo: "https://legal-chatbot-xyz.streamlit.app/",
  },

  {
    slug: "sudoku-visualizer",
    title: "Sudoku Visualizer",
    category: "Algorithm Visualization",
    client: "Personal Project",
    year: 2025,

    tagline: "Interactive visualization of Sudoku solving algorithms.",

    description: `
Sudoku Visualizer is an interactive tool that demonstrates the step-by-step
execution of Sudoku solving algorithms.

The project focuses on visual clarity and algorithmic correctness, allowing
users to observe backtracking and constraint propagation in real time.
    `,

    tech: ["HTML", "CSS", "JavaScript"],

    architecture: [
      "Backtracking-based Sudoku solver implementation",
      "Step-by-step execution visualization",
      "State-driven UI updates for clarity and responsiveness",
    ],

    challenges: [
      "Visualizing recursive algorithms in an intuitive way",
      "Ensuring performance remains stable for complex boards",
      "Synchronizing algorithm state with UI updates",
    ],

    github: "https://github.com/Steller12/sudoku-visualizer",
    demo: "https://steller12.github.io/sudoku-visualizer/",
  },

  {
    slug: "multi-modal-document-intelligence",
    title: "Multi-Modal Document Intelligence",
    category: "AI / RAG Systems",
    client: "Personal Project",
    year: 2026,

    tagline:
      "RAG-based system for querying and analyzing structured and unstructured documents.",

    description: `
Multi-Modal Document Intelligence is a retrieval-augmented generation (RAG)
system designed to answer natural language queries over heterogeneous document
sources.

The system integrates document ingestion, embedding-based retrieval, and
language model generation to provide context-aware responses.
    `,

    tech: [
      "Python",
      "RAG Pipelines",
      "Vector Databases",
      "Large Language Models",
    ],

    architecture: [
      "Document ingestion and preprocessing pipeline",
      "Embedding-based semantic retrieval",
      "Context-aware generation using retrieved documents",
    ],

    challenges: [
      "Designing effective retrieval strategies for diverse documents",
      "Managing context length and relevance in generated responses",
      "Evaluating answer quality for complex queries",
    ],

    github: "https://github.com/Steller12/multi-modal-document-intelligence",
    demo: "https://multi-modal-document-intelligence.streamlit.app/",
  },
];
