import React, { useState } from 'react';
import {
  AppShell,
  Text,
  Title,
  Divider,
  Accordion,
  ScrollArea,
  Button,
  Group,
  List,
  Paper,
  Container,
  rem,
  Anchor,
  Badge,
  Box,
  useMantineColorScheme,
  Burger,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

interface Week {
  date: string;
  title: string;
  topics: string[];
  readings: string[];
  lab: string;
  isProject?: boolean;
}

export const SeminariosPage: React.FC = () => {
  const [active, setActive] = useState('overview');
  const [opened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  

  const courseInfo = {
    title: "Graduate Seminar: Understanding Large Language Models (Theoretical Focus)",
    description: "This graduate seminar explores the theoretical foundations, architectures, capabilities, limitations, evaluation methodologies, and research directions of Large Language Models (LLMs). Students will develop a comprehensive understanding of how LLMs work conceptually, learn to critically evaluate their performance, and develop the skills necessary to conduct research in the field. The course emphasizes theoretical understanding supplemented with illustrative code examples and demonstrations, without requiring extensive computational resources.",
    objectives: [
      "Explain the foundational concepts, architectures, and training methodologies of LLMs",
      "Critically analyze the capabilities and limitations of different LLM architectures",
      "Design robust evaluation frameworks for LLMs while understanding potential pitfalls",
      "Understand tokenization strategies and their impact on model performance",
      "Articulate the principles behind fine-tuning and adaptation techniques",
      "Design research experiments in the field of LLMs",
      "Understand the ethical, social, and governance implications of LLM development and deployment"
    ],
    prerequisites: [
      "Strong programming skills in Python",
      "Background in machine learning fundamentals",
      "Basic knowledge of neural networks and deep learning",
      "Prior experience with PyTorch or TensorFlow recommended",
      "Completion of an introductory NLP course preferred"
    ],
    materials: [
      "Required readings from research papers, technical reports, and selected book chapters",
      "Sample code and notebooks for conceptual demonstrations",
      "Access to pretrained models via APIs or lightweight local deployments",
      "Demonstration datasets for small-scale experiments"
    ],
    resources: {
      references: [
        "Jurafsky, D., & Martin, J. H. \"Speech and Language Processing\" (3rd ed. draft)",
        "Alammar, J. \"The Illustrated Transformer\" and related visualizations",
        "Hugging Face documentation and tutorials",
        "Papers With Code LLM section",
        "\"Transformer Mathematics: A Comprehensive Guide\" by Phuong & Hutter",
        "Wolf et al. \"Transformers: State-of-the-Art Natural Language Processing\"",
        "Bostrom & Durrett (2020). \"Byte Pair Encoding is Suboptimal for Language Model Pretraining\"",
        "Rust et al. (2020). \"How Good is Your Tokenizer? On the Monolingual Performance of Multilingual Language Models\""
      ],
      computing: [
        "Access to cloud-based notebook environments (Google Colab, Kaggle)",
        "Recommendations for local development environments",
        "Access to model APIs for experimentation"
      ],
      community: [
        "Course discussion forum",
        "Weekly office hours",
        "Research paper discussion groups",
        "Industry guest speaker series"
      ]
    }
  };

  const weeks: Week[] = [
    {
      date: "2025-03-12",
      title: "Week 1: Foundations of Language Models and the Path to LLMs",
      topics: [
        "Historical development of language models",
        "Statistical language modeling to neural approaches",
        "Key architectures: RNNs, LSTMs, Transformers",
        "Pretraining and transfer learning paradigms"
      ],
      readings: [
        "Vaswani et al. (2017). \"Attention Is All You Need\"",
        "Radford et al. (2018). \"Improving Language Understanding by Generative Pre-Training\""
      ],
      lab: "Analysis of transformer components using pre-implemented models"
    },
    {
      date: "2025-03-19",
      title: "Week 2: Modern LLM Architectures",
      topics: [
        "Transformer architecture in depth",
        "Self-attention mechanisms and variations",
        "Encoder-only, decoder-only, and encoder-decoder models",
        "Scaling laws and emergent capabilities"
      ],
      readings: [
        "Brown et al. (2020). \"Language Models are Few-Shot Learners\"",
        "Kaplan et al. (2020). \"Scaling Laws for Neural Language Models\""
      ],
      lab: "Exploring architecture differences using Hugging Face's model hub"
    },
    {
      date: "2025-03-26",
      title: "Week 3: Tokenization Strategies",
      topics: [
        "Tokenization algorithms: BPE, WordPiece, SentencePiece, Unigram",
        "Multilingual tokenization challenges and solutions",
        "Custom tokenizer design for specialized domains",
        "Impact of tokenization on model performance"
      ],
      readings: [
        "Sennrich et al. (2016). \"Neural Machine Translation of Rare Words with Subword Units\" (BPE)",
        "Kudo & Richardson (2018). \"SentencePiece: A simple and language independent subword tokenizer and detokenizer for Neural Text Processing\"",
        "Mielke et al. (2021). \"Between Words and Characters: A Brief History of Open-Vocabulary Modeling and Tokenization in NLP\""
      ],
      lab: "Analyzing tokenization outputs across different algorithms and languages"
    },
    {
      date: "2025-04-02",
      title: "Week 4: Pretraining Methodologies",
      topics: [
        "Self-supervised learning objectives",
        "Masked language modeling vs. causal language modeling",
        "Pretraining datasets and corpus creation",
        "Training dynamics and optimization challenges"
      ],
      readings: [
        "Devlin et al. (2019). \"BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding\"",
        "Raffel et al. (2020). \"Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer\"",
        "Clark et al. (2020). \"ELECTRA: Pre-training Text Encoders as Discriminators Rather Than Generators\""
      ],
      lab: "Analysis of pretraining code from BERT and GPT implementations"
    },
    {
      date: "2025-04-09",
      title: "Week 5: Scaling and Training Optimizations",
      topics: [
        "Computing requirements for LLMs",
        "Distributed training approaches (theoretical overview)",
        "Mixed precision and quantization techniques",
        "Optimization algorithms for large-scale training"
      ],
      readings: [
        "Shoeybi et al. (2019). \"Megatron-LM: Training Multi-Billion Parameter Language Models Using Model Parallelism\"",
        "Rajbhandari et al. (2020). \"ZeRO: Memory Optimizations Toward Training Trillion Parameter Models\"",
        "Clark et al. (2022). \"Canine: Pre-training an Efficient Tokenization-Free Encoder for Language Representation\""
      ],
      lab: "Code walkthrough of scaling techniques from major frameworks"
    },
    {
      date: "2025-04-16",
      title: "Week 6: Capabilities and Emergent Behaviors of LLMs",
      topics: [
        "In-context learning and few-shot prompting",
        "Chain-of-thought reasoning",
        "Instruction following",
        "Multi-task capabilities"
      ],
      readings: [
        "Wei et al. (2022). \"Chain-of-Thought Prompting Elicits Reasoning in Large Language Models\"",
        "Kojima et al. (2022). \"Large Language Models are Zero-Shot Reasoners\"",
        "Wang et al. (2022). \"Self-Consistency Improves Chain of Thought Reasoning in Language Models\""
      ],
      lab: "Designing experiments to test emergent capabilities in available LLMs"
    },
    {
      date: "2025-04-30",
      title: "Week 7: Limitations and Failure Modes",
      topics: [
        "Hallucinations and factuality issues",
        "Reasoning limitations",
        "Robustness challenges",
        "Knowledge cutoffs and temporal limitations"
      ],
      readings: [
        "Kadavath et al. (2022). \"Language Models (Mostly) Know What They Know\"",
        "Lin et al. (2022). \"TruthfulQA: Measuring How Models Mimic Human Falsehoods\"",
        "Huang et al. (2023). \"Factuality Challenges in the Era of Large Language Models\""
      ],
      lab: "Systematic testing of model limitations and failure cases"
    },
    {
      date: "2025-05-07",
      title: "Week 8: Evaluation Methodologies and Challenges",
      topics: [
        "Benchmarks and evaluation datasets",
        "Evaluation metrics and their limitations",
        "Human evaluation methodologies",
        "Dataset contamination and benchmark gaming"
      ],
      readings: [
        "Kiela et al. (2021). \"Dynabench: Rethinking Benchmarking in NLP\"",
        "Liang et al. (2022). \"Holistic Evaluation of Language Models\"",
        "Bowman et al. (2021). \"What Will it Take to Fix Benchmarking in Natural Language Understanding?\""
      ],
      lab: "Implementing and analyzing benchmark evaluations",
      isProject: true
    },
    {
      date: "2025-05-14",
      title: "Week 9: Fine-tuning Fundamentals",
      topics: [
        "Transfer learning in LLMs",
        "Supervised fine-tuning",
        "Instruction tuning",
        "Dataset creation for fine-tuning"
      ],
      readings: [
        "Ouyang et al. (2022). \"Training Language Models to Follow Instructions with Human Feedback\"",
        "Sanh et al. (2022). \"Multitask Prompted Training Enables Zero-Shot Task Generalization\"",
        "Wei et al. (2021). \"Finetuned Language Models Are Zero-Shot Learners\""
      ],
      lab: "Small-scale fine-tuning experiments on lightweight models"
    },
    {
      date: "2025-05-21",
      title: "Week 10: Parameter-Efficient Fine-tuning",
      topics: [
        "Full fine-tuning vs. parameter-efficient methods",
        "Low-Rank Adaptation (LoRA) theory",
        "Adapters, prefix tuning, and other PEFT approaches",
        "When to use different adaptation techniques"
      ],
      readings: [
        "Hu et al. (2022). \"LoRA: Low-Rank Adaptation of Large Language Models\"",
        "Houlsby et al. (2019). \"Parameter-Efficient Transfer Learning for NLP\"",
        "Li & Liang (2021). \"Prefix-Tuning: Optimizing Continuous Prompts for Generation\""
      ],
      lab: "Comparative analysis of PEFT methods on small models",
      isProject: true
    },
    {
      date: "2025-05-28",
      title: "Week 11: Reinforcement Learning for LLM Alignment",
      topics: [
        "Reinforcement learning from human feedback (RLHF)",
        "Direct preference optimization (DPO)",
        "Constitutional AI and alignment techniques",
        "Reward modeling"
      ],
      readings: [
        "Christiano et al. (2017). \"Deep Reinforcement Learning from Human Preferences\"",
        "Rafailov et al. (2023). \"Direct Preference Optimization: Your Language Model is Secretly a Reward Model\"",
        "Bai et al. (2022). \"Constitutional AI: Harmlessness from AI Feedback\""
      ],
      lab: "Analysis of alignment techniques and case studies"
    },
    {
      date: "2025-06-04",
      title: "Week 12: Efficient Inference and Deployment",
      topics: [
        "Quantization techniques",
        "KV-caching and other inference optimizations",
        "Deployment considerations",
        "Performance benchmarking"
      ],
      readings: [
        "Dettmers et al. (2022). \"LLM.int8(): 8-bit Matrix Multiplication for Transformers at Scale\"",
        "Frantar et al. (2023). \"GPTQ: Accurate Post-Training Quantization for Generative Pre-trained Transformers\"",
        "Shazeer (2019). \"Fast Transformer Decoding: One Write-Head is All You Need\""
      ],
      lab: "Lightweight model deployment with quantization"
    },
    {
      date: "2025-06-11",
      title: "Week 13: Domain Adaptation and Specialized Applications",
      topics: [
        "Domain-specific fine-tuning considerations",
        "Customizing tokenizers for specialized domains",
        "Knowledge infusion techniques",
        "Retrieval-augmented generation"
      ],
      readings: [
        "Gururangan et al. (2020). \"Don't Stop Pretraining: Adapt Language Models to Domains and Tasks\"",
        "Lewis et al. (2021). \"Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks\"",
        "Peng et al. (2021). \"RadBERT: Adapting Transformer-Based Language Models to Radiology\""
      ],
      lab: "Case studies: Analysis of domain-specific adaptations in different fields"
    },
    {
      date: "2025-06-18",
      title: "Week 14: Building LLM-powered Applications",
      topics: [
        "System design with LLMs",
        "Prompt engineering and optimization",
        "Tool use and agentic behaviors",
        "Evaluation of application quality"
      ],
      readings: [
        "Schick et al. (2023). \"Toolformer: Language Models Can Teach Themselves to Use Tools\"",
        "White et al. (2023). \"Prompt Pattern Catalogs: A Pattern Language for LLM Prompt Engineering\"",
        "Wei et al. (2022). \"Emergent Abilities of Large Language Models\""
      ],
      lab: "Design and prototype a lightweight LLM application"
    },
    {
      date: "2025-06-25",
      title: "Week 15: Ethical Considerations and Research Methods",
      topics: [
        "Bias, fairness, and representation",
        "Safety and alignment techniques",
        "Experiment design and hypothesis testing",
        "Reproducibility practices and research infrastructure"
      ],
      readings: [
        "Weidinger et al. (2022). \"Taxonomy of Risks Posed by Language Models\"",
        "Dodge et al. (2019). \"Show Your Work: Improved Reporting of Experimental Results\"",
        "Blodgett et al. (2020). \"Language (Technology) is Power: A Critical Survey of 'Bias' in NLP\""
      ],
      lab: "Ethical analysis of LLM deployments and research designs",
      isProject: true
    },
    {
      date: "2025-07-02",
      title: "Week 16: Future Directions and Course Synthesis",
      topics: [
        "Multimodal LLMs",
        "Mixture-of-experts architectures",
        "Open vs. closed research ecosystems",
        "Impacts on AI research beyond NLP"
      ],
      readings: [
        "Shazeer et al. (2017). \"Outrageously Large Neural Networks: The Sparsely-Gated Mixture-of-Experts Layer\"",
        "Recent position papers on the future of LLM research",
        "Survey of multimodal model architectures"
      ],
      lab: "Final Project Presentations and Course retrospective",
      isProject: true
    }
  ];

  const navItems = [
    { id: 'overview', label: 'Course Overview' },
    { id: 'objectives', label: 'Learning Objectives' },
    { id: 'prerequisites', label: 'Prerequisites' },
    { id: 'materials', label: 'Course Materials' },
    { id: 'schedule', label: 'Weekly Schedule' },
    { id: 'resources', label: 'Resources' }
  ];

  const renderContent = () => {
    switch (active) {
      case 'overview':
        return (
          <Container>
            <Title order={1} mb="lg">Graduate Seminar: Understanding Large Language Models (Theoretical Focus)</Title>
            <Title order={2} mb="md">Course Overview</Title>
            <Paper p="md" withBorder>
              <Text>{courseInfo.description}</Text>
            </Paper>
          </Container>
        );
      case 'objectives':
        return (
          <Container>
            <Title order={2} mb="md">Learning Objectives</Title>
            <Paper p="md" withBorder>
              <List>
                {courseInfo.objectives.map((objective, index) => (
                  <List.Item key={index} mb="xs">{objective}</List.Item>
                ))}
              </List>
            </Paper>
          </Container>
        );
      case 'prerequisites':
        return (
          <Container>
            <Title order={2} mb="md">Prerequisites</Title>
            <Paper p="md" withBorder>
              <List>
                {courseInfo.prerequisites.map((prereq, index) => (
                  <List.Item key={index}>{prereq}</List.Item>
                ))}
              </List>
            </Paper>
          </Container>
        );
      case 'materials':
        return (
          <Container>
            <Title order={2} mb="md">Course Materials</Title>
            <Paper p="md" withBorder>
              <List>
                {courseInfo.materials.map((material, index) => (
                  <List.Item key={index}>{material}</List.Item>
                ))}
              </List>
            </Paper>
          </Container>
        );
      case 'schedule':
        return (
          <Container>
            <Title order={2} mb="md">Weekly Schedule</Title>
            <Accordion>
              {weeks.map((week, index) => (
                <Accordion.Item key={index} value={`week-${index + 1}`}>
                  <Accordion.Control>
                    <Group>
                      <Text>{week.date} - {week.title}</Text>
                      {week.isProject && <Badge color="red">Project Milestone</Badge>}
                    </Group>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Title order={5}>Topics</Title>
                    <List type="ordered" withPadding>
                      {week.topics.map((topic, topicIndex) => (
                        <List.Item key={topicIndex}>{topic}</List.Item>
                      ))}
                    </List>
                    
                    <Title order={5} mt="md">Readings</Title>
                    <List withPadding>
                      {week.readings.map((reading, readingIndex) => (
                        <List.Item 
                          key={readingIndex} 
                        >
                          {reading}
                        </List.Item>
                      ))}
                    </List>
                    
                    <Title order={5} mt="md">Lab/Activities</Title>
                    <Text>{week.lab}</Text>
                  </Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion>
          </Container>
        );
      case 'resources':
        return (
          <Container>
            <Title order={2} mb="md">Resources</Title>
            
            <Title order={4}>Recommended References</Title>
            <Paper p="md" withBorder mb="md">
              <List>
                {courseInfo.resources.references.map((reference, index) => (
                  <List.Item key={index}>{reference}</List.Item>
                ))}
              </List>
            </Paper>
            
            <Title order={4}>Computing Resources</Title>
            <Paper p="md" withBorder mb="md">
              <List>
                {courseInfo.resources.computing.map((resource, index) => (
                  <List.Item key={index}>{resource}</List.Item>
                ))}
              </List>
            </Paper>
            
            <Title order={4}>Community and Support</Title>
            <Paper p="md" withBorder>
              <List>
                {courseInfo.resources.community.map((item, index) => (
                  <List.Item key={index}>{item}</List.Item>
                ))}
              </List>
            </Paper>
          </Container>
        );
      default:
        return <Text>Select a section from the navigation</Text>;
    }
  };
  const { colorScheme } = useMantineColorScheme();

  return (
    <AppShell
      padding="md"
      py="lg"
      navbar={{
        width: { base: 250 },
        breakpoint: 'sm',
        collapsed: { mobile: !opened, desktop: false },
      }}
      header={{
        height: "4rem",
      }}
      styles={(theme) => ({
        main: {
          backgroundColor: colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      })}
    >

      
      <AppShell.Navbar p="xs">
        <AppShell.Section grow component={ScrollArea}>
          <Box py="md">
            {navItems.map((item) => (
              <Button
                key={item.id}
                fullWidth
                variant={active === item.id ? "filled" : "subtle"}
                color= {colorScheme == "dark" ? "D3D3D3" : "gray"}
                onClick={() => {setActive(item.id); toggleDrawer(); console.log(opened)}}
                my={5}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </AppShell.Section>
      </AppShell.Navbar>
      
      <AppShell.Main>
        <ScrollArea style={{ height: 'calc(100vh - 60px)' }}>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggleDrawer} hiddenFrom="sm" size="sm" mb="lg" />
        </Group>
          {renderContent()}
        </ScrollArea>
      </AppShell.Main>
    </AppShell>
  );
};
