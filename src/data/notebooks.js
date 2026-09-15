/**
 * notebooks.js
 * ─────────────────────────────────────────────────────────────────
 * Agrega, edita o elimina notebooks aquí.
 * Cada objeto tiene:
 *   title       – Nombre del notebook
 *   description – Qué hace el notebook
 *   tags        – Array de strings (para filtros)
 *   link        – URL del notebook en Google Colab
 *   code        – Snippet representativo (Python)
 * ─────────────────────────────────────────────────────────────────
 */

const notebooks = [
  {
    title: "Question and Answer System for Student Processes at Universidad del Valle with LLMs",
    description:
      "This Google Colab notebook implements and evaluates three Question-Answering (QA) architectures based on Large Language Models (LLMs): a Base LLM, a Retrieval-Augmented Generation (RAG) system, and an Agent-based system. Its main goal is to provide accurate answers to student process-related queries at Universidad del Valle's Cali campus. The notebook includes data management, a golden dataset for evaluation, chat history persistence, and performance evaluation using ROUGE, BLEU, and BERTScore, enabling a comparative analysis of the three architectures.",
    tags: ["LLM", "RAG", "Agent", "QA", "Model Evaluation", "NLP"],
    link: "https://colab.research.google.com/drive/11VE_RqLV5cmr_DnG1gFpI6-9Wzgkhkss?usp=sharing",
    code: `class PromptAgentSystem:
    def __init__(self, model_name: str, max_tool_iters: int = 5):
        self.llm = ChatOpenAI(model=model_name, temperature=0.1)
        self.tools_max_iter = max_tool_iters

    # Nodo: Domain Detector
    def domain_detector(self, state: ChatState):
        print("\n--- START DOMAIN_DETECTOR node ---")
        response = self.llm.invoke(
            [
                SystemMessage(content=DOMAIN_DETECTOR_PROMPT),
                HumanMessage(content=state["question"]),
            ]
        )
        domain = response.content.strip().lower()
        print(f"Detected domain: {domain}")
        print("--- END DOMAIN_DETECTOR node ---\n")
        return {"detected_domain": domain}`,
  },
  {
    title: "Neural Network Backpropagation for Breast Cancer Diagnosis: Architecture Exploration and Hyperparameter Tuning",
    description:
      "This Colab notebook implements and evaluates artificial neural networks using backpropagation for breast cancer diagnosis. It covers data preprocessing, feature scaling, and train-test splitting using the Breast Cancer Wisconsin (Diagnostic) dataset. Two architectures are explored: a simple network with one hidden layer and a modified network with two hidden layers. Hyperparameter tuning is performed for learning rate, epochs, and hidden neurons, with results presented through tables and 3D visualizations. The notebook also includes the forward and backward pass equations for the two-hidden-layer architecture.",
    tags: ["Neuronal Networks", "Backpropagation", "Machine Learning", "Hyperparameter Tuning"],
    link: "https://drive.google.com/file/d/1w0qKDrvkf7xqhKBeO0F4lHWa9FeAAPAF/view?usp=sharing",
    code: `# --------- Backpropagation ---------
      # Gradients are calculated using the chain rule, propagating the error
      # backwards from the output layer through the network.

      # Output layer gradients
      d_a3 = (y_pred - y) * sigmoid_deriv(self.z3)
      dW3 = np.dot(self.a2.T, d_a3)
      db3 = np.sum(d_a3, axis=0, keepdims=True)

      # Hidden layer 2 gradients
      d_a2 = np.dot(d_a3, self.W3.T) * sigmoid_deriv(self.z2)
      dW2 = np.dot(self.a1.T, d_a2)
      db2 = np.sum(d_a2, axis=0, keepdims=True)

      # Hidden layer 1 gradients
      d_a1 = np.dot(d_a2, self.W2.T) * sigmoid_deriv(self.z1)
      dW1 = np.dot(X.T, d_a1)
      db1 = np.sum(d_a1, axis=0, keepdims=True)`,
  },
  {
    title: " Character-Level RNN for Text Generation: Hyperparameter Tuning and Gradient Clipping Analysis",
    description:
      "This Colab notebook implements and evaluates a character-level language model using a vanilla Recurrent Neural Network (RNN). It explores the impact of hidden neurons, sequence length, iterations, and gradient clipping on model performance. The model is applied to two tasks: generating dog names and Shakespeare-style text. The notebook includes data preprocessing, a custom RNN with backpropagation and Adagrad optimization, loss and perplexity visualizations, and analysis of the generated outputs and model configurations.",
    tags: ["RNN", "Character-Level Language Model", "NLP", "Text Generation", "Hyperparameter Tuning"],
    link: "https://drive.google.com/file/d/14J0A0ilcrNFQEvbMCvRorZKM3dhww9aF/view?usp=sharing",
    code: `# Initialize gradients
        dWxh, dWhy, dWhh = np.zeros_like(self.Wxh), np.zeros_like(self.Why), np.zeros_like(self.Whh)
        dbh, dby = np.zeros_like(self.bh), np.zeros_like(self.by)
        dhnext = np.zeros_like(h[0])

        for t in reversed(range(self.seq_length)):
            dy = np.copy(p[t])
            dy[targets[t]] =  dy[targets[t]] - 1  # softmax-loss derivative
            dWhy = dWhy + dy @ h[t].T
            dby = dby + dy
            dh = self.Why.T @ dy + dhnext
            dhraw = (1 - h[t] * h[t]) * dh # tanh derivative
            dbh = dbh + dhraw
            dWxh = dWxh + dhraw @ x[t].T
            dWhh = dWhh + dhraw @ h[t-1].T
            dhnext = self.Whh.T @ dhraw

        # Gradient clipping implementation
        if self.clip_gradients:
            for dpara in [dWxh, dWhh, dWhy, dby, dbh]:
                np.clip(dpara, -5, 5, out = dpara)

        return dWxh, dWhh, dWhy, dbh, dby`,
  },
  {
    title: "Stock Market Price Prediction using Recurrent Neural Networks (LSTM and GRU)",
    description:
      "This notebook implements stock price prediction using LSTM and GRU recurrent neural networks. It preprocesses historical Acer Inc. stock data, creates time-series sequences, and splits the data into training, validation, and test sets. Different hyperparameters and architectures are evaluated, including recurrent units, epochs, batch sizes, dropout, and a stacked GRU model. Performance is measured using RMSE and visualized through loss and prediction plots. The results show that a simple GRU achieved the best performance for this dataset.",
    tags: ["Machine Learning", "LSTM", "GRU", "RNN"],
    link: "https://drive.google.com/file/d/1RZGQWPCPp84JoKb-nl8dW5lmSFQ2lsOs/view?usp=sharing",
    code: `def create_sequences(data, seq_length):
    """
    Creates (X, y) sequences for the model.
    X: Samples of 'seq_length' days.
    y: The value of the next day (the prediction).
    """
    X, y = [], []
    for i in range(len(data) - seq_length):
        X.append(data[i:(i + seq_length), 0])
        y.append(data[i + seq_length, 0])
    return np.array(X), np.array(y)`,
  },
  {
    title: "Spanish Text Preprocessing with SpaCy: Tokenization and Cleaning of Large Corpus",
    description:
      "This Colab notebook demonstrates a comprehensive workflow for natural language processing (NLP) in Spanish. It covers loading a large Spanish text corpus from Hugging Face, segmenting the text into sentences using SpaCy, tokenizing each sentence, and performing text cleaning. The cleaning process involves removing numbers, Spanish stopwords (using NLTK), punctuation, special characters, and extra spaces through regular expressions.",
    tags: ["NLP", "SpaCy", "Text Processing", "Cleaning", "Tokenization"],
    link: "https://colab.research.google.com/drive/1MfRac8k2T-puVEdxfEjOXm4boaw_oov7?usp=sharing",
    code: `def clean_sentence(sentence):
    sentence = re.sub(r"[^\w]", " ", sentence)  # Keep only letters, numbers, and underscores (Removes: punctuation, special characters, spaces, tabs, and newlines)
    sentence = re.sub(r"_", " ", sentence)  # Replace only underscores with blank spaces
    sentence = re.sub(r"\d+", " ", sentence)  # Remove all numbers/digits (\d+ = any sequence of digits 0-9)
    sentence = " ".join([word for word in sentence.split() if word.lower() not in STOP_WORDS])  # Remove stopwords

    return sentence`,
  },
  {
    title: "SentencePiece Tokenizer Training for Spanish Corpus",
    description:
      "This Colab notebook demonstrates the process of training SentencePiece tokenizers for the Spanish language. It utilizes the JRC (large_spanish_corpus) dataset from Hugging Face. The training involves creating 'word' type models with varying vocabulary sizes (5k, 10k, and 20k) and incorporating user-defined special tokens like <sep>, <cls/>, <s>, and </s>. After training, the notebook illustrates how to tokenize a sample Spanish sentence using each of the generated tokenizers, showcasing the differences in tokenization based on vocabulary size.",
    tags: ["NLP", "Tokenization", "SentencePiece", "Machine Learning", "Text Processing"],
    link: "https://colab.research.google.com/drive/1XrplEmvrb4x13HNEFTdc83Bf-_OxqTRv?usp=sharing",
    code: `# Function to train tokenizer
def train_tokenizer(input_path: str, model_prefix: str, vocab_size: int):
    # Include input, model_prefix, 'word' type model and user symbols
    spm.SentencePieceTrainer.train(
        f'--input={input_path} --model_prefix={model_prefix} --vocab_size={vocab_size} --model_type=word --user_defined_symbols=<sep>,<cls/>,<s>,</s>'
    )

# Train tokenizers for different vocabulary sizes
TOKENIZERS = {
    "tokenizer_10": 10,
    "tokenizer_100": 100,
    "tokenizer_1k": 1000,
    "tokenizer_5k": 5000,
    "tokenizer_10k": 10000,
    "tokenizer_20k": 20000
}

for tokenizer_name, tokenizer_size in TOKENIZERS.items():
    print(f'Training "{tokenizer_name}"...')
    train_tokenizer(input_paths, tokenizer_name, tokenizer_size)
    print(f'Training finished for "{tokenizer_name}"')`,
  },
  {
    title: "BETO Tokenization for Spanish Biomedical Named Entity Recognition (BioBERT Dataset)",
    description:
      "This Colab notebook focuses on preparing and processing the BioBERT dataset for Named Entity Recognition (NER) in Spanish biomedical text. It covers downloading and cleaning the dataset's JSON files, loading the data into Hugging Face's datasets format, and performing exploratory data analysis to understand the tag distribution. Crucially, it demonstrates how to initialize and use the BETO (Bidirectional Encoder Representations from Transformers for Spanish) tokenizer from the transformers library to tokenize sentences from the dataset, illustrating the output with token IDs and their corresponding tokens, including special tokens.",
    tags: ["NLP", "Tokenization", "BERT", "BioBERT", "NER"],
    link: "https://colab.research.google.com/drive/1uf4lMukXu_m9Vl-emR273hy51W5EWv6e?usp=sharing",
    code: `from transformers import BertTokenizer

tokenizer = BertTokenizer.from_pretrained("dccuchile/bert-base-spanish-wwm-uncased")

# Tokenizar con tokens especiales
tokens_ids = tokenizer.encode(" ".join(train_data[0]["sentencia"]))

# Convertir los IDs de tokens en tokens legibles
tokens = tokenizer.convert_ids_to_tokens(tokens_ids)
print(tokens_ids)
print(tokens)`,
  },
  {
    title: "PDF Document Chunking with LangChain and PDFPlumber: Exploring Text Splitting Strategies",
    description:"This notebook demonstrates how to load PDF documents using pdfplumber and LangChain's PDFPlumberLoader. It then explores different text chunking strategies provided by LangChain, specifically CharacterTextSplitter (fixed-length chunking) and RecursiveCharacterTextSplitter (sliding window chunking). The notebook includes a process to download sample PDFs and systematically apply various chunk_size and chunk_overlap parameters for each splitting method to analyze their impact on text fragmentation, which is crucial for applications like Retrieval-Augmented Generation (RAG).",
    tags: ["PDF Processing", "Text Chunking", "PDFPlumber", "RAG", "NLP"],
    link: "https://colab.research.google.com/drive/1jSb-RbIfBzkPxfc3jlZBXYeA6rWfMY-t?usp=sharing",
    code: `# Function to chunk pages
def chunk_text(text, method="character", chunk_size=500, chunk_overlap=50):
    if method == "character":
        splitter = CharacterTextSplitter(
            separator="",
            chunk_size=chunk_size,
            chunk_overlap=chunk_overlap
        )
    elif method == "recursive":
        splitter = RecursiveCharacterTextSplitter(
            separators=["\n\n", "\n", " ", ""],
            chunk_size=chunk_size,
            chunk_overlap=chunk_overlap
        )
    else:
        raise ValueError("Método de chunking no válido")

    return splitter.split_text(text)`,
    },
    {
    title: "Comparison of BiLSTM-CRF Models for Named Entity Recognition in Prostate Cancer Corpus with and Without Word2Vec Embeddings",
    description:"This Colab notebook evaluates and compares BiLSTM-CRF models for Named Entity Recognition (NER) in the prostate cancer domain. It explores two approaches: basic tokenization and pre-trained Word2Vec embeddings from the Europe PMC dataset. The notebook covers data preprocessing, tokenization, padding, vocabulary creation, model training, and evaluation, including the impact of batch size and epochs. Finally, the best-performing model is used to predict NER tags on a medical text sample.",
    tags: ["NER", "BiLSTM-CRF", "Word2Vec", "Embeddings", "NLP", "Machine Learning"],
    link: "https://colab.research.google.com/drive/1AEuzVEw_BJusLQXC4PApFdL2FDTshzlz?usp=sharing",
    code: `# Construcción del modelo con embeddings
def build_bilstm_crf_with_embeddings(
    embedding_matrix,
    vocab_size=VOCAB_SIZE,
    tag_count=TAG_COUNT,
    embedding_dim=EMBEDDING_DIM,
    lstm_units=LSTM_UNITS,
    max_len=MAX_LEN,
    optimizer=OPTIMIZER,
    model_name=MODEL_BASE_NAME + '_emb'
):
    inputs = Input(shape=(max_len,), name="input_tokens")
    x = Embedding(
        input_dim=vocab_size,
        output_dim=embedding_dim,
        input_length=max_len,
        weights=[embedding_matrix],
        trainable=True,
        mask_zero=True,
        name="token_embedding"
    )(inputs)

    x = Bidirectional(
            LSTM(units=lstm_units, return_sequences=True),
            name="bilstm_layer"
        )(x)
    x = Dense(tag_count, name="dense_logits")(x)
    crf = CRF(units=tag_count, name="crf_layer")
    outputs = crf(x)
    base = Model(inputs=inputs, outputs=outputs, name=model_name)
    model = ModelWithCRFLoss(base)
    model.compile(optimizer=optimizer)
    model.build(input_shape=(None, max_len))
    return model`,
  },
   {
    title: "Fine-tuning Transformer Models (BETO, XLM-RoBERTa) for Named Entity Recognition on Prostate Cancer Data",
     description:
      "This Colab implements and compares fine-tuning of pre-trained transformer models, including BETO and XLM-RoBERTa, for Named Entity Recognition (NER) using a prostate cancer dataset. It evaluates different batch sizes and epochs based on precision, recall, and F1-score. The notebook also applies Parameter-Efficient Fine-Tuning (PEFT) with 8-bit quantization to optimize XLM-RoBERTa training in resource-constrained environments. Finally, the best-performing models are evaluated and prepared for upload to Hugging Face.",
    tags: ["NER", "Transformers", "Fine-tuning", "BETO", "XLM-RoBERTa", "PEFT", "QLoRA"],    
    link: "https://colab.research.google.com/drive/1HxEu6FUraqc-ExGhni3s6vChvNoKZLZQ?usp=sharing",
    code: `def tokenize_and_align_labels(texts, labels, max_length=128):
    tokenized_inputs = tokenizer(
        texts,
        truncation=True,
        is_split_into_words=True,
        padding="max_length",
        max_length=max_length,
        return_tensors="pt"
    )

    aligned_labels = []

    for i, label in enumerate(labels):
        word_ids = tokenized_inputs.word_ids(batch_index=i)
        previous_word_idx = None
        label_ids = []

        for word_idx in word_ids:
            if word_idx is None:
                label_ids.append(-100)
            elif word_idx != previous_word_idx:
                label_ids.append(label2id[label[word_idx]])
            else:
                label_ids.append(-100)
            previous_word_idx = word_idx

        aligned_labels.append(label_ids)

    tokenized_inputs["labels"] = aligned_labels
    return tokenized_inputs`,    
  }, 
  {
    title: "Named Entity Recognition (NER) in Medical Reports: Comparing Sequential and Large Language Models (LLMs) for Prostate Cancer Data Extraction",
     description:
      "This Colab notebook explores and compares the performance of sequential models (BiLSTM+CRF) and transformer models (BETO, XML-Roberta) for Named Entity Recognition (NER) on a specialized prostate cancer corpus. It also investigates the capabilities of generative models (Mistral, Llama) for structured information extraction from medical texts, focusing on defining effective prompts for various LLMs.",
    tags: ["NER", "LLM", "Transformers", "BiLSTM-CRF", "NLP", "Prompt Engineering"],    
    link: "https://colab.research.google.com/drive/1OiFMSnsZE8gAlryELE1ry46Pkn2QhsFM?usp=sharing",
    code: `def init_pipeline(model_name):
    tokenizer = AutoTokenizer.from_pretrained(model_name)
    # Load model with 8-bit quantization if GPU is available
    if torch.cuda.is_available():
        model = AutoModelForCausalLM.from_pretrained(
            model_name,
            device_map="auto",
            torch_dtype=torch.bfloat16,
            load_in_8bit=True,
            llm_int8_enable_fp32_cpu_offload=True
        )
        print(f"GPU available: loading {model_name} with dynamic 8-bit quantization")
    else:
        print(f"No GPU found to load model {model_name}")

    # Build text generation pipeline
    streamer = TextStreamer(tokenizer, skip_prompt=True, skip_special_tokens=True)

    if torch.cuda.is_available():
      pipe = pipeline(
          task="text-generation",
          model=model,
          tokenizer=tokenizer,
          device_map="auto",
          max_new_tokens=5000,
          repetition_penalty=1.15,
          streamer=streamer
      )

      llm = HuggingFacePipeline(pipeline=pipe, model_kwargs={'temperature':0.1})

    else:
      print(f"No GPU found to load model {model_name}")

    return llm`,    
  },
  {
    title: "Predicting CO2 Emissions using Decision Tree Classifiers",
    description: "This notebook demonstrates the process of building and evaluating Decision Tree classification models to predict CO2 emissions from vehicle data. It covers data loading, preprocessing using pipelines (imputation and scaling), splitting data into training and testing sets, training multiple Decision Tree models with varying max_depth and criterion (Gini and Entropy) and splitter ('best' and 'random'), and evaluating their performance using accuracy scores and confusion matrices. The analysis also explores the impact of the min_samples_leaf hyperparameter on model performance.",
    tags: ["Machine Learning", "Decision Trees", "Hyperparameter Tuning"],
    link: "https://drive.google.com/file/d/1urNkA-Yct2ZxlB-Wvv9wB5evMEdq__xD/view?usp=sharing",
    code: `modelo5_gb = tree.DecisionTreeClassifier(criterion='gini', max_depth=5, splitter='best', random_state=123)
modelo5_gb.fit(X_train, y_train)
scores5_gb = cross_val_score(modelo5_gb, X_train, y_train, cv=5, scoring='accuracy')
print(scores5_gb)
print(scores5_gb.mean())

tree.plot_tree(modelo5_gb)
tree.export_graphviz(decision_tree=modelo5_gb, class_names=True,out_file="Arbol emisiones CO2 5-GB.dot")`,
  },
];

export default notebooks;
