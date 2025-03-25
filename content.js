document.addEventListener('DOMContentLoaded', function() {
    // Add the rest of the content sections
    const content = document.querySelector('.content');
    
    // Core Frameworks section
    const frameworksSection = document.createElement('section');
    frameworksSection.id = 'frameworks';
    frameworksSection.className = 'section';
    frameworksSection.innerHTML = `
        <h2>Core Frameworks: Neuroscience Principles Redefining AI</h2>
        <p>Three fundamental neuroscience frameworks are driving innovation beyond traditional scaling approaches. These frameworks provide theoretical foundations and practical insights for developing more genuinely intelligent AI systems.</p>
    `;
    content.appendChild(frameworksSection);
    
    // Free Energy Principle section
    const fepSection = document.createElement('section');
    fepSection.id = 'free-energy';
    fepSection.className = 'section';
    fepSection.innerHTML = `
        <h3>The Free Energy Principle and Active Inference</h3>
        <p>Karl Friston's Free Energy Principle (FEP) has emerged as a foundational framework for next-generation AI systems. In a 2025 interview published by Singularity University, Friston emphasized that the current trajectory of machine learning - focused on increasing parameters and data - represents "exactly the wrong direction from the point of view of the physicist." Instead, Friston argues for focusing on "smart data" and the "sparse data that you need in order to resolve your uncertainty."</p>
        
        <div class="card friston-card">
            <div class="card-title"><i class="fas fa-brain"></i>Active Inference</div>
            <p>The FEP describes the brain as an adaptive system continually minimizing uncertainty through active inference - a cycle of predicting sensory inputs and updating beliefs when predictions don't match reality. Unlike passive pattern recognition in current AI, this involves actively engaging with the environment through an action-perception loop.</p>
        </div>
        
        <button class="collapsible">Recent Research Applications (2025)</button>
        <div class="collapsible-content">
            <ul>
                <li><strong>SOLOMON Framework (IBM & MIT, Feb 2025):</strong> A neuro-inspired reasoning network incorporating the Free Energy Principle. This architecture optimizes reasoning by reducing discrepancies between expected and observed outcomes, particularly for semiconductor layout design tasks.</li>
                <li><strong>Boosting MCTS with Free Energy Minimization (Jan 2025):</strong> Demonstrates how Active Inference principles can be applied to Monte Carlo Tree Search algorithms to create more adaptive and efficient decision-making in complex environments.</li>
            </ul>
        </div>
    `;
    content.appendChild(fepSection);
    
    // Metastability section
    const metastabilitySection = document.createElement('section');
    metastabilitySection.id = 'metastability';
    metastabilitySection.className = 'section';
    metastabilitySection.innerHTML = `
        <h3>Metastability: Beyond Critical States to Adaptive Dynamics</h3>
        <p>Scott Kelso's work on metastability represents another crucial framework for advancing AI beyond traditional scaling. Unlike the critical brain hypothesis, which suggests the brain operates at a critical point between chaos and order, Kelso's research indicates that the brain maintains a metastable state - allowing it to flexibly transition between integration (coordination between brain areas) and segregation (specialized processing in discrete regions).</p>
        
        <div class="card kelso-card">
            <div class="card-title"><i class="fas fa-project-diagram"></i>Neural Coordination</div>
            <p>Metastability allows the brain to coordinate activity across different scales and regions without requiring rigid synchronization. This balance between independence and coordination enables flexible, adaptive responses to changing conditions - a capability largely missing from current AI systems.</p>
        </div>
        
        <button class="collapsible">Recent Research Applications (2025)</button>
        <div class="collapsible-content">
            <ul>
                <li><strong>Metastability Demystified (2025):</strong> A comprehensive review tracing the evolution of metastability concepts from theoretical foundations to practical applications in neural networks.</li>
                <li><strong>FAU Human Brain and Behavior Laboratory Research (2025):</strong> Ongoing work applying Kelso's principles to develop AI systems with more human-like adaptive capabilities, focusing on intermediate-sized ensembles that bridge micro and macro scales of coordination.</li>
            </ul>
        </div>
    `;
    content.appendChild(metastabilitySection);
    
    // Embodied Consciousness section
    const consciousnessSection = document.createElement('section');
    consciousnessSection.id = 'embodied-consciousness';
    consciousnessSection.className = 'section';
    consciousnessSection.innerHTML = `
        <h3>Embodied Consciousness and AI Development</h3>
        <p>Anil Seth's work on embodied consciousness provides the third critical framework for advancing AI beyond scaling. In his 2024 paper "Conscious artificial intelligence and biological naturalism," Seth argues that consciousness emerges from being a living, embodied self-organized organism fundamentally motivated by self-preservation - not merely from algorithmic complexity.</p>
        
        <div class="card seth-card">
            <div class="card-title"><i class="fas fa-heartbeat"></i>Beyond Computation</div>
            <p>Seth's research challenges the assumption that consciousness will spontaneously emerge from scaling up computational models. Rather, his work suggests that meaningful intelligence requires grounding in sensorimotor experience and biological imperatives.</p>
        </div>
        
        <button class="collapsible">Recent Research Applications (2025)</button>
        <div class="collapsible-content">
            <ul>
                <li><strong>University of Sussex AI Research Group:</strong> Continues to explore consciousness from a computational neuroscience perspective, investigating how conscious experience might emerge from predictive processing frameworks.</li>
                <li><strong>Embodied AI Research (2025):</strong> Seth's recent work emphasizes that AI systems capable of genuine understanding must incorporate elements of embodiment and active engagement with their environment, rather than passive processing of abstract data.</li>
            </ul>
        </div>
    `;
    content.appendChild(consciousnessSection);
    
    // Integration Paradigm section
    const integrationSection = document.createElement('section');
    integrationSection.id = 'integration';
    integrationSection.className = 'section';
    integrationSection.innerHTML = `
        <h2>The Integration Paradigm: Combining Neuroscience with AI</h2>
        <p>The most promising developments in AI research for 2025 involve integrating these neuroscience principles into practical applications:</p>
        
        <div class="card framework-card">
            <div class="card-title"><i class="fas fa-microchip"></i>Neuro-Inspired Reasoning Networks</div>
            <p>The SOLOMON framework from IBM and MIT represents one of the most significant advances in neuroscience-inspired AI in early 2025. By incorporating the Free Energy Principle into its architecture, SOLOMON demonstrates several advantages over traditional large language models:</p>
            <ul>
                <li>The ability to correct logical inconsistencies and arithmetic errors through continuous refinement and assessment</li>
                <li>Enhanced spatial reasoning capabilities, particularly for complex design tasks</li>
                <li>Reduced hallucination issues compared to traditional LLMs</li>
                <li>Improved adaptability to domain-specific problems without requiring continuous retraining</li>
            </ul>
            <p>This represents a fundamental shift from simply scaling up existing models to developing architecturally different systems guided by neuroscientific principles.</p>
        </div>
        
        <div class="card framework-card">
            <div class="card-title"><i class="fas fa-robot"></i>Embodied AI Systems</div>
            <p>Advances in embodied AI systems show increasing integration of principles from Seth's work on consciousness and embodiment:</p>
            <ul>
                <li>NVIDIA's Cosmos-Reason1 (March 2025) represents a breakthrough in multimodal models for physical common sense and embodied reasoning.</li>
                <li>Research on embodied AI is increasingly focused on giving systems the ability to learn through interaction with their environment, rather than passive ingestion of training data.</li>
            </ul>
        </div>
        
        <div class="card framework-card">
            <div class="card-title"><i class="fas fa-network-wired"></i>Metastable Computational Architectures</div>
            <p>Applications of Kelso's metastability principles are beginning to influence AI architectural design:</p>
            <ul>
                <li>New neural network architectures inspired by metastability concepts are demonstrating improved adaptability to changing conditions without catastrophic forgetting.</li>
                <li>Research published in early 2025 demonstrates how metastable dynamics enable more flexible transitions between different processing regimes, allowing AI systems to balance specialization with integration.</li>
            </ul>
        </div>
    `;
    content.appendChild(integrationSection);
    
    // Conclusion section
    const conclusionSection = document.createElement('section');
    conclusionSection.id = 'conclusion';
    conclusionSection.className = 'section';
    conclusionSection.innerHTML = `
        <h2>Conclusion: A New Paradigm Emerges</h2>
        <p>The integration of neuroscience principles into AI development represents a fundamental shift from the simple scaling paradigm that has dominated the field. While scaling laws have driven remarkable progress in AI capabilities, the research highlighted in this document suggests we are approaching the limits of what can be achieved through scaling alone.</p>
        <p>The future of AI development increasingly points toward systems that incorporate principles from neuroscience - particularly the Free Energy Principle, metastability, and embodied cognition. These approaches promise AI systems that are not merely larger but fundamentally different in architecture and function, capable of more human-like understanding, creativity, and adaptability.</p>
        <p>As the AI industry confronts the limitations of traditional scaling, these neuroscience-inspired approaches offer a promising alternative path toward more capable and genuinely intelligent systems. The most significant advances in 2025 and beyond will likely come not from incrementally larger models, but from new architectures that draw inspiration from how intelligence emerges in biological systems.</p>
    `;
    content.appendChild(conclusionSection);
    
    // Flowchart section
    const flowchartSection = document.createElement('section');
    flowchartSection.id = 'flowchart';
    flowchartSection.className = 'section';
    flowchartSection.innerHTML = `
        <h2>Conceptual Framework: Interactive Flowchart</h2>
        <p>This flowchart illustrates the relationships between traditional scaling approaches, neuroscience principles, and next-generation AI development:</p>
        <div class="flowchart-container">
            <div class="mermaid">
            graph TB
                subgraph "Traditional AI Approach"
                    A[Scaling Paradigm] --> B[More Parameters]
                    A --> C[More Data]
                    A --> D[More Compute]
                    B & C & D --> E[Performance Improvements]
                    E --> F[Limitations & Diminishing Returns]
                end
                
                subgraph "Neuroscience-Inspired Approaches"
                    G[Free Energy Principle<br>Karl Friston] --> H[Active Inference]
                    H --> I[Prediction-Error Minimization]
                    I --> J[SOLOMON Framework]
                    
                    K[Metastability<br>Scott Kelso] --> L[Balance between<br>Integration & Segregation]
                    L --> M[Adaptive Transitions]
                    M --> N[Dynamic Neural Architectures]
                    
                    O[Embodied Consciousness<br>Anil Seth] --> P[Sensorimotor<br>Grounding]
                    P --> Q[Self-Preservation<br>Mechanisms]
                    Q --> R[Physical Common Sense<br>Models]
                end
                
                subgraph "Next-Generation AI"
                    S[Integration of<br>Neuroscience Principles] --> T[Enhanced Reasoning]
                    S --> U[Embodied Understanding]
                    S --> V[Adaptive Capabilities]
                    
                    T & U & V --> W[True Intelligence]
                end
                
                F --> S
                J & N & R --> S
            </div>
        </div>
    `;
    content.appendChild(flowchartSection);
    
    // References section
    const referencesSection = document.createElement('section');
    referencesSection.id = 'references';
    referencesSection.className = 'section';
    referencesSection.innerHTML = `
        <h2>References</h2>
        <div class="references">
            <ol>
                <li>TechCrunch. (2025, March 19). <a href="https://techcrunch.com/2025/03/19/researchers-say-theyve-discovered-a-new-method-of-scaling-up-ai-but-theres-reason-to-be-skeptical/" target="_blank">Researchers say they've discovered a new method of 'scaling up' AI, but there's reason to be skeptical</a>.</li>
                <li>OpenTools.AI. (2025, January). <a href="https://opentools.ai/news/ai-industry-faces-major-setbacks-are-scaling-laws-reaching-their-limits" target="_blank">AI Industry Faces Major Setbacks: Are Scaling Laws Reaching Their Limits?</a></li>
                <li>Friston, K. (2025). <a href="https://www.su.org/resources/how-free-energy-shapes-the-future-of-ai" target="_blank">How Free Energy Shapes the Future of AI</a>. Singularity University.</li>
                <li>IBM & MIT Research Team. (2025, February). <a href="https://www.marktechpost.com/2025/02/16/this-ai-paper-from-ibm-and-mit-introduces-solomon-a-neuro-inspired-reasoning-network-for-enhancing-llm-adaptability-in-semiconductor-layout-design/" target="_blank">SOLOMON: A Neuro-Inspired Reasoning Network for Enhancing LLM Adaptability in Semiconductor Layout Design</a>.</li>
                <li>Seth, A.K. (2024). <a href="https://www.anilseth.com/research/key-papers/" target="_blank">Conscious artificial intelligence and biological naturalism</a>. PsyArXiv.</li>
                <li>Kelso, J.A.S. (2025). <a href="https://arxiv.org/abs/2303.04146" target="_blank">The Metastable Brain~Mind</a>. arXiv Preprint.</li>
                <li>NVIDIA Research. (2025, March). <a href="https://www.marktechpost.com/2025/03/24/this-ai-paper-from-nvidia-introduces-cosmos-reason1-a-multimodal-model-for-physical-common-sense-and-embodied-reasoning/" target="_blank">Cosmos-Reason1: A Multimodal Model for Physical Common Sense and Embodied Reasoning</a>.</li>
                <li>University of Sussex AI Research Group. (2025). <a href="https://www.sussex.ac.uk/research/centres/ai-research-group/research/consciousness" target="_blank">Consciousness Research</a>.</li>
                <li>Hardy-White, D. (2025, January). <a href="https://deanhardywhite.substack.com/p/are-ai-scaling-laws-hitting-a-wall" target="_blank">Are AI Scaling Laws Hitting a Wall?</a></li>
                <li>Riken Research Institute & VERSES. (2025). <a href="https://deniseholt.us/revolutionary-ai-whitepaper-validated-by-new-neuroscience-breakthrough/" target="_blank">Revolutionary AI Whitepaper Validated by New Neuroscience Breakthrough</a>.</li>
            </ol>
        </div>
    `;
    content.appendChild(referencesSection);
    
    // Initialize Mermaid
    mermaid.initialize({ startOnLoad: true, theme: 'default' });
    
    // Initialize collapsibles
    const collapsibles = document.getElementsByClassName('collapsible');
    for (let i = 0; i < collapsibles.length; i++) {
        collapsibles[i].addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    }
    
    // Navigation active state and smooth scrolling
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('.section');
    
    // Intersection Observer for detecting visible sections
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add visible class for animation
                entry.target.classList.add('visible');
                
                // Update active nav link
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Improved smooth scrolling for nav links with better offset handling
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            const headerHeight = document.querySelector('header').offsetHeight;
            const navHeight = document.querySelector('nav').offsetHeight;
            const offset = Math.max(headerHeight - navHeight + 20, 20);
            
            // Smoother scroll with better positioning
            window.scrollTo({
                top: targetSection.offsetTop - offset,
                behavior: 'smooth'
            });
            
            // Update active state
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
            
            // Add a visual highlight effect to the target section
            targetSection.classList.add('highlight-section');
            setTimeout(() => {
                targetSection.classList.remove('highlight-section');
            }, 1000);
        });
    });
    
    // Add highlight style for section transitions
    const highlightStyle = document.createElement('style');
    highlightStyle.textContent = `
        @keyframes section-highlight {
            0% { background-color: transparent; }
            30% { background-color: rgba(var(--primary-color-rgb), 0.1); }
            100% { background-color: transparent; }
        }
        .highlight-section {
            animation: section-highlight 1s ease-out;
        }
    `;
    document.head.appendChild(highlightStyle);
    
    // Interactive elements for neuroscience frameworks
    const frameworksList = document.getElementById('neuroscience-frameworks');
    if (frameworksList) {
        const listItems = frameworksList.querySelectorAll('li');
        listItems.forEach((item, index) => {
            item.style.cursor = 'pointer';
            item.addEventListener('click', function() {
                // Scroll to respective section
                const sections = ['free-energy', 'metastability', 'embodied-consciousness'];
                const targetSection = document.getElementById(sections[index]);
                window.scrollTo({
                    top: targetSection.offsetTop - 20,
                    behavior: 'smooth'
                });
                
                // Update active nav link
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sections[index]) {
                        link.classList.add('active');
                    }
                });
            });
        });
    }
});
