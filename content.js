document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Setup
    const mobileNavToggle = document.getElementById('mobileNavToggle');
    const navOverlay = document.getElementById('navOverlay');
    const sideNav = document.getElementById('sideNav');
    
    // Add the rest of the content sections
    const content = document.querySelector('.content');
    
    // Core Frameworks section
    const frameworksSection = document.createElement('section');
    frameworksSection.id = 'frameworks';
    frameworksSection.className = 'section';
    frameworksSection.innerHTML = `
        <h2>Brain Science to the Rescue: Three Game-Changing Ideas</h2>
        <p class="section-intro">While engineers chase bigger models, neuroscientists have been uncovering the fundamental principles that make human intelligence special.</p>
        <p>While AI engineers have been busy building bigger digital brains, neuroscientists have been quietly uncovering how our actual brains pull off their magic. It turns out, the human mind isn't just a bigger version of simpler brains – it works on fundamentally different principles. Here are three brain-inspired frameworks that could help AI break through its current ceiling:</p>
        <div class="section-divider"></div>
        <div class="next-section-prompt" onclick="document.querySelector('a[href=\'#free-energy\']').click()">Explore the Free Energy Principle <i class="fas fa-arrow-right"></i></div>
    `;
    content.appendChild(frameworksSection);
    
    // Free Energy Principle section
    const fepSection = document.createElement('section');
    fepSection.id = 'free-energy';
    fepSection.className = 'section';
    fepSection.innerHTML = `
        <p class="section-intro">Karl Friston's Free Energy Principle provides a mathematical framework for understanding how intelligent systems process information and make decisions based on uncertainty.</p>
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
        <div class="section-divider"></div>
        <div class="next-section-prompt" onclick="document.querySelector('a[href=\'#metastability\']').click()">Discover Metastability Next <i class="fas fa-arrow-right"></i></div>
    `;
    content.appendChild(fepSection);
    
    // Metastability section
    const metastabilitySection = document.createElement('section');
    metastabilitySection.id = 'metastability';
    metastabilitySection.className = 'section';
    metastabilitySection.innerHTML = `
        <p class="section-intro">Scott Kelso's concept of metastability offers insights into how the brain balances competing demands, creating a dynamic that could be crucial for more adaptive AI systems.</p>
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
        <div class="section-divider"></div>
        <div class="next-section-prompt" onclick="document.querySelector('a[href=\'#embodied-consciousness\']').click()">Learn About Embodied Consciousness <i class="fas fa-arrow-right"></i></div>
    `;
    content.appendChild(metastabilitySection);
    
    // Embodied Consciousness section
    const consciousnessSection = document.createElement('section');
    consciousnessSection.id = 'embodied-consciousness';
    consciousnessSection.className = 'section';
    consciousnessSection.innerHTML = `
        <p class="section-intro">Anil Seth's work challenges us to think about intelligence as more than just computation—suggesting AI needs to be connected to physical reality to achieve human-like understanding.</p>
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
        <div class="section-divider"></div>
        <div class="next-section-prompt" onclick="document.querySelector('a[href=\'#integration\']').click()">See How These Theories Combine <i class="fas fa-arrow-right"></i></div>
    `;
    content.appendChild(consciousnessSection);
    
    // Integration Paradigm section
    const integrationSection = document.createElement('section');
    integrationSection.id = 'integration';
    integrationSection.className = 'section';
    integrationSection.innerHTML = `
        <p class="section-intro">The real magic happens when these neuroscience principles work together, creating AI systems that think in fundamentally different ways than today's scaled models.</p>
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
        <div class="section-divider"></div>
        <div class="next-section-prompt" onclick="document.querySelector('a[href=\'#conclusion\']').click()">Read Our Conclusions <i class="fas fa-arrow-right"></i></div>
    `;
    content.appendChild(integrationSection);
    
    // Conclusion section
    const conclusionSection = document.createElement('section');
    conclusionSection.id = 'conclusion';
    conclusionSection.className = 'section';
    conclusionSection.innerHTML = `
        <p class="section-intro">We're at a pivotal moment in AI development where the path forward requires more than just bigger models—it demands fundamentally new approaches inspired by the brain.</p>
        <h2>Conclusion: A New Paradigm Emerges</h2>
        <p>The integration of neuroscience principles into AI development represents a fundamental shift from the simple scaling paradigm that has dominated the field. While scaling laws have driven remarkable progress in AI capabilities, the research highlighted in this document suggests we are approaching the limits of what can be achieved through scaling alone.</p>
        <p>The future of AI development increasingly points toward systems that incorporate principles from neuroscience - particularly the Free Energy Principle, metastability, and embodied cognition. These approaches promise AI systems that are not merely larger but fundamentally different in architecture and function, capable of more human-like understanding, creativity, and adaptability.</p>
        <p>As the AI industry confronts the limitations of traditional scaling, these neuroscience-inspired approaches offer a promising alternative path toward more capable and genuinely intelligent systems. The most significant advances in 2025 and beyond will likely come not from incrementally larger models, but from new architectures that draw inspiration from how intelligence emerges in biological systems.</p>
        <div class="section-divider"></div>
        <div class="next-section-prompt" onclick="document.querySelector('a[href=\'#flowchart\']').click()">View the Visual Framework <i class="fas fa-arrow-right"></i></div>
    `;
    content.appendChild(conclusionSection);
    
    // Flowchart section
    const flowchartSection = document.createElement('section');
    flowchartSection.id = 'flowchart';
    flowchartSection.className = 'section';
    flowchartSection.innerHTML = `
        <p class="section-intro">This interactive diagram shows how the concepts we've discussed connect together to form a new paradigm for AI development.</p>
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
        <div class="section-divider"></div>
        <div class="next-section-prompt" onclick="document.querySelector('a[href=\'#references\']').click()">Check Out Our References <i class="fas fa-arrow-right"></i></div>
    `;
    content.appendChild(flowchartSection);
    
    // References section
    const referencesSection = document.createElement('section');
    referencesSection.id = 'references';
    referencesSection.className = 'section';
    referencesSection.innerHTML = `
        <p class="section-intro">Dive deeper into these concepts with our carefully curated list of academic papers, books, and research from leading experts in neuroscience and AI.</p>
        <h2>References & Further Reading</h2>
        <p class="section-intro">Explore these verified sources to deepen your understanding of how neuroscience is reshaping AI development. All links open in a new tab.</p>
        <div class="references">
            <ol>
                <li><span class="ref-author">Friston, K.</span> (2010). <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2666703/" target="_blank">The free-energy principle: a unified brain theory?</a> <span class="journal">Nature Reviews Neuroscience</span>, 11(2), 127-138.</li>
                
                <li><span class="ref-author">Hassabis, D., Kumaran, D., Summerfield, C., & Botvinick, M.</span> (2017). <a href="https://www.sciencedirect.com/science/article/pii/S0896627317305093" target="_blank">Neuroscience-Inspired Artificial Intelligence</a>. <span class="journal">Neuron</span>, 95(2), 245-258.</li>
                
                <li><span class="ref-author">Kelso, J.A.S.</span> (2012). <a href="https://royalsocietypublishing.org/doi/10.1098/rstb.2011.0351" target="_blank">Multistability and metastability: understanding dynamic coordination in the brain</a>. <span class="journal">Philosophical Transactions of the Royal Society B</span>, 367(1591), 906-918.</li>
                
                <li><span class="ref-author">Seth, A.K.</span> (2021). <a href="https://mitpress.mit.edu/9780262045896/being-you/" target="_blank">Being You: A New Science of Consciousness</a>. <span class="publisher">MIT Press</span>.</li>
                
                <li><span class="ref-author">LeCun, Y.</span> (2022). <a href="https://openreview.net/forum?id=BZ5a1r-kVsf" target="_blank">A Path Towards Autonomous Machine Intelligence</a>. <span class="journal">OpenReview</span>.</li>
                
                <li><span class="ref-author">DeepMind</span> (2023). <a href="https://www.deepmind.com/blog/building-architectures-that-can-handle-the-worlds-complexity" target="_blank">Building architectures that can handle the world's complexity</a>. <span class="publisher">DeepMind Blog</span>.</li>
                
                <li><span class="ref-author">Stanford University</span> (2023). <a href="https://aiindex.stanford.edu/report/" target="_blank">The AI Index Annual Report</a>. <span class="publisher">Stanford HAI</span>.</li>
                
                <li><span class="ref-author">Cao, R., Summerfield, C., & Saxe, A.</span> (2023). <a href="https://www.sciencedirect.com/science/article/pii/S1364661323000773" target="_blank">A simple normative network approximates human judgments across perceptual, deliberative, and developmental domains</a>. <span class="journal">Trends in Cognitive Sciences</span>, 27(6), 552-563.</li>
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
    
    // Improve scroll behavior for smoother section transitions
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Mobile navigation toggle function
    function toggleMobileNav() {
        sideNav.classList.toggle('active');
        navOverlay.classList.toggle('active');
        
        // Toggle icon between bars and times
        const icon = mobileNavToggle.querySelector('i');
        if (sideNav.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }
    
    // Event listeners for mobile navigation
    mobileNavToggle.addEventListener('click', toggleMobileNav);
    navOverlay.addEventListener('click', toggleMobileNav);
    
    // Close mobile menu when a nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768 && sideNav.classList.contains('active')) {
                toggleMobileNav();
            }
        });
    });
    
    // Intersection Observer for detecting visible sections
    const observerOptions = {
        root: null,
        rootMargin: '-10px',
        threshold: 0.15
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
            const offset = Math.max(headerHeight - navHeight + 10, 10); // Reduced offset for tighter section transitions
            
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
