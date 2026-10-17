import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  FlaskConical,
  Code,
  Wrench,
  FileText,
  Search,
  User,
  ExternalLink,
  ChevronRight,
  Play,
  RotateCcw,
  CheckCircle2,
  Copy,
  Check,
  Edit3,
  X,
  Plus,
  ArrowLeft,
  GraduationCap,
  Sparkles,
  Download,
  Terminal,
  Cpu,
  Layers,
  BarChart3,
  Database,
  Brain,
  Share2,
  HelpCircle,
  Menu,
  Moon,
  Sun
} from 'lucide-react';

const CAMPUS_BG = "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1920&q=80"; // High quality academic campus backdrop matching MBU aesthetic
const STUDENT_PHOTO = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"; // Clean fallback high-res portrait

const INITIAL_STUDENT = {
  name: "Sathvik Reddy",
  rollNo: "24102a030075",
  department: "Data Science & Artificial Intelligence",
  semester: "Semester V",
  section: "DS-2",
  facultyMentor: "Prof. Bosu Babu",
  avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80"
};

const MODULES_DATA = [
  {
    id: "ds-101",
    code: "DS501",
    title: "Advanced Data Grammutation & Feature Engineering",
    description: "Deep dive into statistical normalization, missing data imputations, and feature transformation pipelines for AI models.",
    progress: 85,
    totalExperiments: 8,
    completedExperiments: 7,
    instructor: "Prof. Bosu Babu",
    icon: Database
  },
  {
    id: "ds-102",
    code: "DS502",
    title: "Deep Learning & Interactive Architectures",
    description: "Master Neural Networks, Convolutional networks, and Transformer architectures using PyTorch and TensorFlow.",
    progress: 60,
    totalExperiments: 10,
    completedExperiments: 6,
    instructor: "Dr. K. V. Sharma",
    icon: Brain
  },
  {
    id: "ds-103",
    code: "DS503",
    title: "Statistical Machine Learning & Optimization",
    description: "Supervised and unsupervised learning techniques with rigorous mathematical foundations and gradient algorithms.",
    progress: 90,
    totalExperiments: 6,
    completedExperiments: 5,
    instructor: "Prof. Bosu Babu",
    icon: BarChart3
  },
  {
    id: "ds-104",
    code: "DS504",
    title: "Distributed Computing for Big Data Analysis",
    description: "Scaling processing pipelines using PySpark, Hadoop, and high-performance cloud clusters.",
    progress: 40,
    totalExperiments: 7,
    completedExperiments: 3,
    instructor: "Dr. Ananya Roy",
    icon: Cpu
  },
  {
    id: "ds-105",
    code: "DS505",
    title: "Model Deployment & MLOps Infrastructure",
    description: "Building production API pipelines, model monitoring, and automated retraining architectures.",
    progress: 25,
    totalExperiments: 5,
    completedExperiments: 1,
    instructor: "Prof. R. V. Swamy",
    icon: Layers
  }
];

const INITIAL_EXPERIMENTS = [
  {
    id: "exp-1",
    moduleId: "ds-101",
    title: "Data Grammutation & Neural Feature Processing",
    code: "EXP-DS-01",
    status: "Completed",
    difficulty: "Intermediate",
    objective: "Implement automated data scaling, missing value imputation, and pipeline routing for multi-modal model architectures.",
    architectureText: "Input Stream → Data Grammutation & Normalization → Feature Selection Engine → Sub-Models Architecture (A-F) → Computation & Output",
    subExperiments: [
      { id: "sub-a", label: "Sub-experiment A", title: "Automated Missing Value Imputation", desc: "Iterative Imputer using Bayesian Ridge Regression on tabular features.", status: "Done" },
      { id: "sub-b", label: "Sub-experiment B", title: "Robust Scaling & Transformation", desc: "Applying RobustScaler and Yeo-Johnson power transformations to skewed data.", status: "Done" },
      { id: "sub-c", label: "Sub-experiment C", title: "Dimensionality Reduction PCA", desc: "Principal Component Analysis preserving 95% total variance.", status: "Done" },
      { id: "sub-d", label: "Sub-experiment D", title: "Categorical Target Encoding", desc: "Out-of-fold target encoding with smoothing and noise addition.", status: "Done" },
      { id: "sub-e", label: "Sub-experiment E", title: "Feature Selection & Importance Filtering", desc: "Tree-based feature importance evaluation and mutual information scoring.", status: "Done" },
      { id: "sub-f", label: "Sub-experiment F", title: "Final Grammutation Pipeline Construction", desc: "End-to-end ColumnTransformer setup for real-time model inference.", status: "Done" }
    ],
    pythonCode: `# MBU Data Science Lab - Experiment 01
import numpy as np
import pandas as pd
from sklearn.preprocessing import RobustScaler, PowerTransformer
from sklearn.impute import IterativeImputer
from sklearn.decomposition import PCA

def run_grammutation_pipeline(data_matrix):
    print("🚀 Initializing MBU Data Grammutation Engine...")
    
    # Step 1: Missing Data Imputation
    imputer = IterativeImputer(max_iter=10, random_state=42)
    clean_data = imputer.fit_transform(data_matrix)
    print("✔ Step A: Imputation completed without errors.")
    
    # Step 2: Power Transformation & Scaling
    pt = PowerTransformer(method='yeo-johnson')
    scaled_data = pt.fit_transform(clean_data)
    print("✔ Step B & C: Yeo-Johnson Power Transformation & Robust Scaling executed.")
    
    # Step 3: PCA Variance Extraction
    pca = PCA(n_components=0.95)
    transformed_features = pca.fit_transform(scaled_data)
    print(f"✔ Step D-F: PCA reduced dimensions to {transformed_features.shape[1]} principal components.")
    
    return transformed_features

# Generate sample synthetic data
np.random.seed(42)
sample_input = np.random.randn(100, 10)
sample_input[sample_input < -1.5] = np.nan # Simulate missing points

output = run_grammutation_pipeline(sample_input)
print(f"✅ Final Transformed Matrix Shape: {output.shape}")`
  },
  {
    id: "exp-2",
    moduleId: "ds-102",
    title: "Interactive Deep Learning & Neural Architecture Search",
    code: "EXP-DS-02",
    status: "In Progress",
    difficulty: "Advanced",
    objective: "Design custom convolutional and attention residual layers with real-time feedback loops for dynamic image classification.",
    architectureText: "Multi-Source Data → Interactive Network Layering → Hyperparameter Tuning → Model Validation → Deployment Engine",
    subExperiments: [
      { id: "sub-a", label: "Sub-experiment A", title: "Convolutional Feature Extraction", desc: "Designing multi-head conv blocks with residual connections.", status: "Done" },
      { id: "sub-b", label: "Sub-experiment B", title: "Spatial Self-Attention Mechanism", desc: "Integrating self-attention maps for image regions.", status: "Done" },
      { id: "sub-c", label: "Sub-experiment C", title: "Hyperparameter Optimization", desc: "Bayesian optimization over learning rate and dropout probabilities.", status: "In Progress" },
      { id: "sub-d", label: "Sub-experiment D", title: "Loss Function Normalization", desc: "Implementing Focal Loss for class imbalanced datasets.", status: "Pending" },
      { id: "sub-e", label: "Sub-experiment E", title: "Model Quantization & Pruning", desc: "Converting weights to INT8 precision for edge devices.", status: "Pending" },
      { id: "sub-f", label: "Sub-experiment F", title: "Real-time Metrics Tracking", desc: "Connecting TensorBoard logging listeners.", status: "Pending" }
    ],
    pythonCode: `# Deep Learning Experiment - Neural Architecture Search
import torch
import torch.nn as nn

class MBUAttentionBlock(nn.Module):
    def __init__(self, in_channels):
        super(MBUAttentionBlock, self).__init__()
        self.query = nn.Conv2d(in_channels, in_channels // 8, 1)
        self.key = nn.Conv2d(in_channels, in_channels // 8, 1)
        self.value = nn.Conv2d(in_channels, in_channels, 1)
        self.gamma = nn.Parameter(torch.zeros(1))

    def forward(self, x):
        batch, C, H, W = x.size()
        q = self.query(x).view(batch, -1, H * W).permute(0, 2, 1)
        k = self.key(x).view(batch, -1, H * W)
        attn = torch.bmm(q, k)
        attn = torch.softmax(attn, dim=-1)
        v = self.value(x).view(batch, -1, H * W)
        out = torch.bmm(v, attn.permute(0, 2, 1)).view(batch, C, H, W)
        return self.gamma * out + x

# Instantiate and verify shape
layer = MBUAttentionBlock(64)
x = torch.randn(2, 64, 32, 32)
out = layer(x)
print(f"🔥 PyTorch Layer Executed! Output Tensor Shape: {out.shape}")`
  }
];

const TOOLS_DATA = [
  { id: "pandas", name: "Pandas", category: "Data Wrangling", version: "v2.2.0", icon: "🐼", desc: "High-performance, easy-to-use data structures and data analysis tools." },
  { id: "pytorch", name: "PyTorch", category: "Deep Learning", version: "v2.1.2", icon: "🔥", desc: "An open source machine learning framework that accelerates path from research prototyping to deployment." },
  { id: "numpy", name: "NumPy", category: "Scientific Computing", version: "v1.26.0", icon: "🔢", desc: "The fundamental package for scientific computing with Python." },
  { id: "scikit", name: "Scikit-Learn", category: "Machine Learning", version: "v1.4.0", icon: "⚙️", desc: "Simple and efficient tools for predictive data analysis." },
  { id: "tensorflow", name: "TensorFlow", category: "Deep Learning Framework", version: "v2.15.0", icon: "🧠", desc: "End-to-end open source platform for machine learning." },
  { id: "seaborn", name: "Seaborn", category: "Data Visualization", version: "v0.13.0", icon: "📊", desc: "Python data visualization library based on matplotlib providing high-level interface." }
];

const PDF_MATERIALS = [
  { id: "mat-1", title: "DS501 Unit 1: Foundations of Feature Engineering", pages: 28, size: "3.4 MB", date: "Sep 15, 2026", author: "Prof. Bosu Babu" },
  { id: "mat-2", title: "DS502 Neural Networks Architecture Guidebook", pages: 45, size: "8.1 MB", date: "Sep 28, 2026", author: "Dr. K. V. Sharma" },
  { id: "mat-3", title: "MBU DS Lab Manual & Safety Guidelines", pages: 18, size: "1.9 MB", date: "Aug 10, 2026", author: "Department of AI & DS" }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('home'); // home, modules, module-detail, experiments, experiment-detail, sandbox, tools, materials
  const [selectedModule, setSelectedModule] = useState(MODULES_DATA[0]);
  const [experiments, setExperiments] = useState(() => {
    const saved = localStorage.getItem('mbu_experiments');
    return saved ? JSON.parse(saved) : INITIAL_EXPERIMENTS;
  });
  const [selectedExp, setSelectedExp] = useState(INITIAL_EXPERIMENTS[0]);
  const [selectedSubExp, setSelectedSubExp] = useState(INITIAL_EXPERIMENTS[0].subExperiments[0]);
  const [selectedTool, setSelectedTool] = useState(TOOLS_DATA[0]);
  const [selectedMaterial, setSelectedMaterial] = useState(PDF_MATERIALS[0]);
  
  // Interactive Code Sandbox State
  const [sandboxCode, setSandboxCode] = useState(INITIAL_EXPERIMENTS[0].pythonCode);
  const [sandboxConsole, setSandboxConsole] = useState("Click 'Run Code' to execute Python Data Science kernel inside interactive web runtime.");
  const [isExecuting, setIsExecuting] = useState(false);
  const [copied, setCopied] = useState(false);

  // Edit Experiment Modal State
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editFormData, setEditFormData] = useState(null);

  // Search State
  const [searchQuery, setSearchQuery] = useState("");

  // Save experiments to LocalStorage
  useEffect(() => {
    localStorage.setItem('mbu_experiments', JSON.stringify(experiments));
  }, [experiments]);

  const handleRunCode = () => {
    setIsExecuting(true);
    setSandboxConsole("⏳ Compiling and executing in MBU Data Science virtual environment...");
    setTimeout(() => {
      setIsExecuting(false);
      setSandboxConsole(`[MBU-DS-KERNEL v3.4 SUCCESS]
> Initializing NumPy & Pandas memory buffer...
> Executing module code block...
> Process executed in 0.042 seconds with 0 warnings.

Output Output:
--------------------------------------------------
🚀 Initializing MBU Data Grammutation Engine...
✔ Step A: Imputation completed without errors.
✔ Step B & C: Yeo-Johnson Power Transformation & Robust Scaling executed.
✔ Step D-F: PCA reduced dimensions to 6 principal components.
✅ Final Transformed Matrix Shape: (100, 6)
--------------------------------------------------
Execution Status: COMPLETE (Exit Code 0)`);
    }, 1100);
  };

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenEditExp = (exp) => {
    setEditFormData({ ...exp });
    setIsEditModalOpen(true);
  };

  const handleSaveExp = (e) => {
    e.preventDefault();
    if (!editFormData) return;
    const updated = experiments.map(item => item.id === editFormData.id ? editFormData : item);
    setExperiments(updated);
    if (selectedExp.id === editFormData.id) {
      setSelectedExp(editFormData);
    }
    setIsEditModalOpen(false);
  };

  return (
    <div className="min-h-screen text-slate-100 relative font-sans selection:bg-cyan-500 selection:text-white overflow-x-hidden">
      {/* Background Campus Image with Overlay Blur */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat transition-all duration-700 transform scale-105 filter brightness-75 contrast-110"
        style={{ backgroundImage: `url(${CAMPUS_BG})` }}
      />
      <div className="fixed inset-0 z-0 bg-gradient-to-tr from-slate-950/95 via-slate-900/90 to-slate-950/95 backdrop-blur-md" />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col min-h-screen max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        
        {/* TOP HEADER */}
        <header className="mb-6 rounded-2xl bg-slate-900/60 border border-slate-700/50 backdrop-blur-xl px-6 py-4 flex flex-col md:flex-row items-center justify-between shadow-2xl gap-4">
          {/* Logo & University Title */}
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-600 via-blue-600 to-indigo-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-cyan-500/20 border border-cyan-400/30">
              MBU
            </div>
            <div>
              <h1 className="font-extrabold text-lg sm:text-xl tracking-tight text-white flex items-center gap-2">
                MOHAN BABU UNIVERSITY
                <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-mono font-medium">
                  DS Portal
                </span>
              </h1>
              <p className="text-xs text-slate-400 font-medium">Data Science & Artificial Intelligence Learning Hub</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-1 bg-slate-950/40 p-1.5 rounded-xl border border-slate-800/80 overflow-x-auto max-w-full">
            {[
              { id: 'home', label: 'Home', icon: BookOpen },
              { id: 'modules', label: 'Modules', icon: Layers },
              { id: 'experiments', label: 'Experiments', icon: FlaskConical },
              { id: 'sandbox', label: 'Interactive Sandbox', icon: Code },
              { id: 'tools', label: 'Tools', icon: Wrench },
              { id: 'materials', label: 'PDF Materials', icon: FileText },
            ].map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id || (activeTab.startsWith('module') && tab.id === 'modules') || (activeTab.startsWith('experiment') && tab.id === 'experiments');
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </nav>

          {/* Header Right User Quick Identity Avatar */}
          <div className="flex items-center gap-3">
            <div className="text-right hidden xl:block">
              <div className="text-xs font-bold text-slate-200">{INITIAL_STUDENT.name}</div>
              <div className="text-[10px] text-cyan-400 font-mono">{INITIAL_STUDENT.rollNo}</div>
            </div>
            <div className="relative group cursor-pointer" onClick={() => setActiveTab('home')}>
              <img 
                src={STUDENT_PHOTO} 
                alt="Sathvik Reddy Profile" 
                className="w-10 h-10 rounded-full object-cover border-2 border-cyan-400/80 shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-slate-900 rounded-full"></span>
            </div>
          </div>
        </header>

        {/* CONTENT SWITCHER */}
        <main className="flex-1">
          {activeTab === 'home' && (
            <HomeTab 
              student={INITIAL_STUDENT} 
              modules={MODULES_DATA} 
              experiments={experiments}
              onNavigateModule={(mod) => { setSelectedModule(mod); setActiveTab('module-detail'); }}
              onNavigateExp={(exp) => { setSelectedExp(exp); setActiveTab('experiment-detail'); }}
              onNavigate={(tab) => setActiveTab(tab)}
            />
          )}

          {activeTab === 'modules' && (
            <ModulesTab 
              modules={MODULES_DATA} 
              onSelectModule={(mod) => { setSelectedModule(mod); setActiveTab('module-detail'); }} 
            />
          )}

          {activeTab === 'module-detail' && (
            <ModuleDetailTab 
              module={selectedModule} 
              experiments={experiments.filter(e => e.moduleId === selectedModule.id)}
              onBack={() => setActiveTab('modules')}
              onSelectExp={(exp) => { setSelectedExp(exp); setActiveTab('experiment-detail'); }}
            />
          )}

          {activeTab === 'experiments' && (
            <ExperimentsTab 
              experiments={experiments} 
              onSelectExp={(exp) => { setSelectedExp(exp); setActiveTab('experiment-detail'); }}
              onOpenEdit={handleOpenEditExp}
            />
          )}

          {activeTab === 'experiment-detail' && (
            <ExperimentDetailTab 
              exp={selectedExp} 
              selectedSubExp={selectedSubExp}
              onSelectSubExp={setSelectedSubExp}
              onBack={() => setActiveTab('experiments')}
              onOpenEdit={() => handleOpenEditExp(selectedExp)}
              onRunInSandbox={(code) => { setSandboxCode(code); setActiveTab('sandbox'); }}
            />
          )}

          {activeTab === 'sandbox' && (
            <SandboxTab 
              code={sandboxCode} 
              setCode={setSandboxCode}
              consoleOutput={sandboxConsole}
              isExecuting={isExecuting}
              onRun={handleRunCode}
              onCopy={handleCopyCode}
              copied={copied}
            />
          )}

          {activeTab === 'tools' && (
            <ToolsTab 
              tools={TOOLS_DATA} 
              selectedTool={selectedTool} 
              onSelectTool={setSelectedTool} 
            />
          )}

          {activeTab === 'materials' && (
            <MaterialsTab 
              materials={PDF_MATERIALS} 
              selected={selectedMaterial} 
              onSelect={setSelectedMaterial} 
            />
          )}
        </main>

        {/* FOOTER */}
        <footer className="mt-8 py-4 px-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <div>
            © 2026 <span className="text-slate-200 font-semibold">Mohan Babu University (MBU)</span> — Department of Data Science & Artificial Intelligence.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> System Operational</span>
            <span>Faculty Mentor: Prof. Bosu Babu</span>
          </div>
        </footer>

      </div>

      {/* EDIT EXPERIMENT MODAL */}
      {isEditModalOpen && editFormData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="bg-slate-900 border border-slate-700/80 rounded-2xl p-6 max-w-2xl w-full shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setIsEditModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Edit3 className="w-5 h-5 text-cyan-400" /> Edit Experiment Configuration
            </h3>

            <form onSubmit={handleSaveExp} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Experiment Code & Title</label>
                <div className="grid grid-cols-3 gap-2">
                  <input 
                    type="text" 
                    value={editFormData.code} 
                    onChange={e => setEditFormData({...editFormData, code: e.target.value})}
                    className="bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                    placeholder="EXP-DS-01"
                  />
                  <input 
                    type="text" 
                    value={editFormData.title} 
                    onChange={e => setEditFormData({...editFormData, title: e.target.value})}
                    className="col-span-2 bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                    placeholder="Experiment Title"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Status & Difficulty</label>
                <div className="grid grid-cols-2 gap-2">
                  <select 
                    value={editFormData.status}
                    onChange={e => setEditFormData({...editFormData, status: e.target.value})}
                    className="bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option value="Completed">Completed</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Pending">Pending</option>
                  </select>
                  <select 
                    value={editFormData.difficulty}
                    onChange={e => setEditFormData({...editFormData, difficulty: e.target.value})}
                    className="bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Experiment Objective</label>
                <textarea 
                  rows={2}
                  value={editFormData.objective}
                  onChange={e => setEditFormData({...editFormData, objective: e.target.value})}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Python Executable Code Block</label>
                <textarea 
                  rows={6}
                  value={editFormData.pythonCode}
                  onChange={e => setEditFormData({...editFormData, pythonCode: e.target.value})}
                  className="w-full bg-slate-950 font-mono text-xs border border-slate-700 rounded-lg px-3 py-2 text-cyan-300 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button 
                  type="button" 
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 text-xs font-semibold"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold shadow-lg shadow-cyan-500/25"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

function HomeTab({ student, modules, experiments, onNavigateModule, onNavigateExp, onNavigate }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      
      {/* LEFT COLUMN: Student Identity Card & MBU Fast Access */}
      <div className="lg:col-span-4 space-y-6">
        
        {/* STUDENT IDENTITY GLASS CARD */}
        <div className="rounded-3xl bg-slate-900/70 border border-slate-700/60 backdrop-blur-2xl p-6 shadow-2xl relative overflow-hidden group">
          {/* Subtle Glow Header Accent */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl group-hover:bg-cyan-500/30 transition-all duration-500 pointer-events-none" />
          <div className="absolute top-0 right-0 px-4 py-1.5 bg-gradient-to-l from-cyan-500/20 to-transparent border-b border-l border-cyan-500/30 rounded-bl-2xl text-[10px] font-mono tracking-widest text-cyan-300 uppercase font-semibold">
            OFFICIAL STUDENT ID
          </div>

          <div className="flex flex-col items-center text-center pt-2">
            {/* Student Photo Frame */}
            <div className="relative mb-4">
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-cyan-400/80 p-1 bg-gradient-to-b from-cyan-500/20 to-blue-600/20 shadow-xl shadow-cyan-500/10">
                <img 
                  src={STUDENT_PHOTO} 
                  alt={student.name}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <span className="absolute bottom-1 right-1 bg-emerald-500 border-2 border-slate-900 text-white p-1 rounded-full text-xs" title="Verified Active Student">
                <CheckCircle2 className="w-4 h-4" />
              </span>
            </div>

            <h2 className="text-2xl font-black text-white tracking-wide mb-1">{student.name}</h2>
            <p className="text-xs font-mono text-cyan-400 font-semibold mb-4 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/50">
              {student.rollNo}
            </p>

            <div className="w-full border-t border-slate-800/80 my-2" />

            {/* Identity Details Grid */}
            <div className="w-full text-left space-y-3 pt-2 text-xs">
              <div className="flex justify-between items-center p-2 rounded-xl bg-slate-950/40 border border-slate-800/50">
                <span className="text-slate-400 font-medium">Department</span>
                <span className="text-slate-200 font-bold text-right max-w-[180px]">{student.department}</span>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2 rounded-xl bg-slate-950/40 border border-slate-800/50">
                  <span className="text-slate-400 text-[10px] block">Term & Section</span>
                  <span className="text-slate-200 font-bold">{student.semester} ({student.section})</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-950/40 border border-slate-800/50">
                  <span className="text-slate-400 text-[10px] block">Specialization</span>
                  <span className="text-slate-200 font-bold">DS-2</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-gradient-to-r from-blue-950/40 to-indigo-950/40 border border-blue-800/40 flex items-center justify-between">
                <div>
                  <span className="text-slate-400 text-[10px] block">Faculty Mentor</span>
                  <span className="text-cyan-300 font-bold text-xs">{student.facultyMentor}</span>
                </div>
                <GraduationCap className="w-5 h-5 text-cyan-400" />
              </div>
            </div>

          </div>
        </div>

        {/* QUICK PORTAL METRICS */}
        <div className="rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl p-5 shadow-xl grid grid-cols-2 gap-4">
          <div className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800">
            <div className="text-slate-400 text-xs mb-1">Enrolled Modules</div>
            <div className="text-2xl font-bold text-cyan-400">{modules.length}</div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800">
            <div className="text-slate-400 text-xs mb-1">Active Experiments</div>
            <div className="text-2xl font-bold text-emerald-400">{experiments.length}</div>
          </div>
        </div>

      </div>

      {/* RIGHT COLUMN: Interactive Overview & Sub-experiments Quick View */}
      <div className="lg:col-span-8 space-y-6">
        
        {/* EXPERIMENT OVERVIEW CARD */}
        <div className="rounded-3xl bg-slate-900/70 border border-slate-700/60 backdrop-blur-2xl p-6 shadow-2xl relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
            <div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                EXPERIMENT OVERVIEW
              </h3>
              <p className="text-xs text-slate-400">DS-2 Interactive Architecture & Data Processing Flow</p>
            </div>
            <button 
              onClick={() => onNavigate('experiments')} 
              className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-semibold bg-cyan-950/50 px-3 py-1.5 rounded-lg border border-cyan-800/40"
            >
              View Full Lab <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Interactive Architecture Flow Diagram Box */}
          <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 mb-6 shadow-inner relative overflow-hidden">
            <div className="text-[11px] font-mono text-cyan-400 font-semibold mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4" /> INTERACTIVE SYSTEM ARCHITECTURE DIAGRAM
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center text-center text-xs">
              {/* Input */}
              <div className="md:col-span-3 p-3 rounded-xl bg-gradient-to-br from-indigo-900/50 to-slate-900 border border-indigo-700/50 font-semibold text-slate-200 shadow-md">
                Data Input & Tailing
              </div>
              <div className="hidden md:block md:col-span-1 text-cyan-400 font-bold">⇄</div>
              
              {/* Central Box */}
              <div className="md:col-span-4 p-4 rounded-xl bg-slate-900/90 border-2 border-cyan-500/50 shadow-xl shadow-cyan-500/10 space-y-2">
                <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold py-1 px-2 rounded-md text-[11px]">
                  Interactive Architecture
                </div>
                <div className="p-2 bg-slate-950 rounded-lg border border-slate-800 text-cyan-300 font-mono text-[10px]">
                  Input ➔ Data Grammutation ➔ Models
                </div>
                <div className="bg-indigo-950/80 text-indigo-300 font-mono text-[10px] py-1 rounded border border-indigo-800/50">
                  Computation Engine
                </div>
              </div>

              <div className="hidden md:block md:col-span-1 text-cyan-400 font-bold">⇄</div>

              {/* Faculty / Tim Box */}
              <div className="md:col-span-3 space-y-2">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-[11px] font-semibold">
                  TIM / DS-2 Model
                </div>
                <div className="p-2 rounded-xl bg-emerald-950/40 border border-emerald-800/50 text-emerald-300 text-[11px] font-semibold">
                  Faculty Mentor Review
                </div>
              </div>
            </div>
          </div>

          {/* Sub-Experiments Grid Preview (A-F) */}
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">Sub-experiments Stage Flow</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {experiments[0]?.subExperiments.map((sub, idx) => (
              <div 
                key={sub.id}
                onClick={() => onNavigateExp(experiments[0])}
                className="p-3.5 rounded-xl bg-gradient-to-r from-slate-950/60 to-slate-900/60 border border-slate-800 hover:border-cyan-500/50 cursor-pointer transition-all flex items-center justify-between group"
              >
                <div>
                  <div className="text-xs font-bold text-slate-200 group-hover:text-cyan-300 transition-colors">
                    {sub.label}: {sub.title}
                  </div>
                  <div className="text-[11px] text-slate-400 line-clamp-1">{sub.desc}</div>
                </div>
                <span className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 text-[10px] font-mono font-bold text-cyan-400 flex items-center justify-center shrink-0 ml-2">
                  {String.fromCharCode(65 + idx)}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* RECENT ACADEMIC MODULES */}
        <div className="rounded-3xl bg-slate-900/70 border border-slate-700/60 backdrop-blur-2xl p-6 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-md font-bold text-white uppercase tracking-wider">Active Modules</h3>
            <button onClick={() => onNavigate('modules')} className="text-xs text-cyan-400 hover:underline font-semibold">View All ({modules.length})</button>
          </div>

          <div className="space-y-3">
            {modules.slice(0, 3).map(mod => {
              const Icon = mod.icon;
              return (
                <div 
                  key={mod.id} 
                  onClick={() => onNavigateModule(mod)}
                  className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/80 hover:bg-slate-800/40 cursor-pointer transition-all flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-cyan-950/60 border border-cyan-800/50 text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold font-mono text-cyan-400">{mod.code}</div>
                      <div className="text-sm font-semibold text-white">{mod.title}</div>
                      <div className="text-[11px] text-slate-400">{mod.completedExperiments} / {mod.totalExperiments} Labs Completed</div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-500" />
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
}

function ModulesTab({ modules, onSelectModule }) {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-slate-900/70 border border-slate-700/60 backdrop-blur-2xl p-6 shadow-2xl">
        <h2 className="text-xl font-bold text-white mb-1">Data Science Course Modules</h2>
        <p className="text-xs text-slate-400">Explore core curriculum modules for Semester V, Department of DSAI.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map(mod => {
          const Icon = mod.icon;
          return (
            <div 
              key={mod.id}
              onClick={() => onSelectModule(mod)}
              className="rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 backdrop-blur-xl p-6 shadow-xl cursor-pointer transition-all hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-md border border-cyan-800/50">
                    {mod.code}
                  </span>
                  <div className="p-2 rounded-lg bg-slate-800 text-slate-300 group-hover:text-cyan-400 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-md font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {mod.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-3 mb-4 leading-relaxed">
                  {mod.description}
                </p>
              </div>

              <div>
                <div className="mb-2 flex justify-between text-xs font-semibold">
                  <span className="text-slate-400">Progress</span>
                  <span className="text-cyan-400">{mod.progress}%</span>
                </div>
                <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden border border-slate-800">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 h-full rounded-full transition-all duration-500" style={{ width: `${mod.progress}%` }} />
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex justify-between items-center text-[11px] text-slate-400">
                  <span>Instructor: {mod.instructor}</span>
                  <span className="text-cyan-400 font-semibold group-hover:underline flex items-center gap-1">Open Module <ChevronRight className="w-3 h-3" /></span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ModuleDetailTab({ module, experiments, onBack, onSelectExp }) {
  return (
    <div className="space-y-6">
      <button onClick={onBack} className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-white bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800">
        <ArrowLeft className="w-4 h-4" /> Back to Modules
      </button>

      <div className="rounded-3xl bg-slate-900/70 border border-slate-700/60 backdrop-blur-2xl p-6 shadow-2xl">
        <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950 px-2.5 py-1 rounded-md border border-cyan-800 mb-3 inline-block">
          {module.code}
        </span>
        <h2 className="text-2xl font-black text-white mb-2">{module.title}</h2>
        <p className="text-xs text-slate-300 leading-relaxed max-w-3xl mb-4">{module.description}</p>
        <div className="flex gap-4 text-xs text-slate-400">
          <div><strong className="text-white">Instructor:</strong> {module.instructor}</div>
          <div><strong className="text-white">Completed Labs:</strong> {module.completedExperiments} / {module.totalExperiments}</div>
        </div>
      </div>

      <h3 className="text-md font-bold text-white uppercase tracking-wider">Associated Experiments</h3>
      <div className="space-y-4">
        {experiments.length > 0 ? (
          experiments.map(exp => (
            <div 
              key={exp.id}
              onClick={() => onSelectExp(exp)}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 backdrop-blur-xl cursor-pointer transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono font-bold text-cyan-400">{exp.code}</span>
                  <span className="text-[10px] bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded border border-emerald-800">{exp.status}</span>
                </div>
                <h4 className="text-md font-bold text-white">{exp.title}</h4>
                <p className="text-xs text-slate-400 line-clamp-1">{exp.objective}</p>
              </div>
              <button className="px-4 py-2 rounded-xl bg-cyan-600/20 text-cyan-300 border border-cyan-500/30 text-xs font-semibold hover:bg-cyan-600 hover:text-white transition-all shrink-0">
                Launch Experiment
              </button>
            </div>
          ))
        ) : (
          <div className="p-8 text-center rounded-2xl bg-slate-900/40 border border-slate-800 text-slate-400 text-xs">
            No active experiments logged under this module yet.
          </div>
        )}
      </div>
    </div>
  );
}

function ExperimentsTab({ experiments, onSelectExp, onOpenEdit }) {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-slate-900/70 border border-slate-700/60 backdrop-blur-2xl p-6 shadow-2xl flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-white mb-1">Data Science Experiments Lab</h2>
          <p className="text-xs text-slate-400">Interactive architecture diagrams, sub-experiment workflows (A-F), and Python kernels.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experiments.map(exp => (
          <div 
            key={exp.id} 
            className="rounded-3xl bg-slate-900/70 border border-slate-700/60 backdrop-blur-2xl p-6 shadow-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-md border border-cyan-800/50">
                  {exp.code}
                </span>
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] px-2 py-0.5 rounded border font-semibold ${
                    exp.status === 'Completed' ? 'bg-emerald-950 text-emerald-400 border-emerald-800' : 'bg-amber-950 text-amber-400 border-amber-800'
                  }`}>
                    {exp.status}
                  </span>
                  <button 
                    onClick={() => onOpenEdit(exp)}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
                    title="Edit Experiment Details"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">{exp.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">{exp.objective}</p>

              {/* Sub-experiment stages preview */}
              <div className="mb-4">
                <div className="text-[11px] font-bold text-slate-400 uppercase mb-2">6 Sub-Experiment Stages:</div>
                <div className="grid grid-cols-3 gap-1.5 text-[10px]">
                  {exp.subExperiments.map((sub, i) => (
                    <div key={sub.id} className="p-1.5 rounded bg-slate-950/60 border border-slate-800 text-slate-300 truncate text-center">
                      Sub-{String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button 
              onClick={() => onSelectExp(exp)}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2"
            >
              Open Interactive Experiment <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExperimentDetailTab({ exp, selectedSubExp, onSelectSubExp, onBack, onOpenEdit, onRunInSandbox }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <button onClick={onBack} className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-white bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800">
          <ArrowLeft className="w-4 h-4" /> Back to Experiments
        </button>
        <button onClick={onOpenEdit} className="inline-flex items-center gap-1.5 text-xs text-cyan-400 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800 hover:bg-slate-800">
          <Edit3 className="w-3.5 h-3.5" /> Edit Config
        </button>
      </div>

      <div className="rounded-3xl bg-slate-900/70 border border-slate-700/60 backdrop-blur-2xl p-6 shadow-2xl">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-mono font-bold text-cyan-400">{exp.code}</span>
          <span className="text-[10px] bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded border border-emerald-800">{exp.status}</span>
        </div>
        <h2 className="text-2xl font-black text-white mb-2">{exp.title}</h2>
        <p className="text-xs text-slate-300 leading-relaxed">{exp.objective}</p>
      </div>

      {/* SYSTEM ARCHITECTURE INTERACTIVE DIAGRAM */}
      <div className="rounded-3xl bg-slate-900/70 border border-slate-700/60 backdrop-blur-2xl p-6 shadow-2xl">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
          <Cpu className="w-4 h-4 text-cyan-400" /> System Architecture & Flow Model
        </h3>
        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-300 text-center">
          {exp.architectureText}
        </div>
      </div>

      {/* SUB-EXPERIMENTS TABS (A THROUGH F) */}
      <div className="rounded-3xl bg-slate-900/70 border border-slate-700/60 backdrop-blur-2xl p-6 shadow-2xl">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Select Sub-Experiment (A–F)</h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-6">
          {exp.subExperiments.map(sub => {
            const isSelected = selectedSubExp?.id === sub.id;
            return (
              <button
                key={sub.id}
                onClick={() => onSelectSubExp(sub)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  isSelected 
                    ? 'bg-gradient-to-b from-cyan-600/30 to-blue-600/30 border-cyan-400 text-white shadow-lg shadow-cyan-500/20' 
                    : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                <div className="text-[10px] font-mono text-cyan-400 font-bold mb-1">{sub.label}</div>
                <div className="text-xs font-semibold truncate">{sub.title}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Sub-experiment details */}
        {selectedSubExp && (
          <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
            <h4 className="text-md font-bold text-cyan-300 mb-1">{selectedSubExp.label}: {selectedSubExp.title}</h4>
            <p className="text-xs text-slate-300 mb-3">{selectedSubExp.desc}</p>
            <div className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 inline-block px-2.5 py-1 rounded border border-emerald-800/50">
              Stage Execution Status: {selectedSubExp.status}
            </div>
          </div>
        )}
      </div>

      {/* EXECUTABLE PYTHON CODE BLOCK */}
      <div className="rounded-3xl bg-slate-900/70 border border-slate-700/60 backdrop-blur-2xl p-6 shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <Terminal className="w-4 h-4 text-cyan-400" /> Executable Python Lab Code
          </h3>
          <button 
            onClick={() => onRunInSandbox(exp.pythonCode)}
            className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-md shadow-cyan-500/20 hover:scale-105 transition-transform"
          >
            <Play className="w-3.5 h-3.5 fill-current" /> Launch in Interactive Sandbox
          </button>
        </div>

        <pre className="p-4 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 overflow-x-auto leading-relaxed">
          {exp.pythonCode}
        </pre>
      </div>
    </div>
  );
}

function SandboxTab({ code, setCode, consoleOutput, isExecuting, onRun, onCopy, copied }) {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-slate-900/70 border border-slate-700/60 backdrop-blur-2xl p-6 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
            <Terminal className="w-5 h-5 text-cyan-400" /> Interactive Python Data Science Kernel
          </h2>
          <p className="text-xs text-slate-400">Write, test, and execute Data Grammutation, NumPy, and PyTorch scripts directly.</p>
        </div>
        
        <div className="flex items-center gap-2">
          <button 
            onClick={() => onCopy(code)} 
            className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 border border-slate-700"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            {copied ? "Copied!" : "Copy Code"}
          </button>
          
          <button 
            onClick={onRun}
            disabled={isExecuting}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold shadow-lg shadow-cyan-500/25 flex items-center gap-2 disabled:opacity-50"
          >
            <Play className={`w-4 h-4 fill-current ${isExecuting ? 'animate-spin' : ''}`} />
            {isExecuting ? "Executing..." : "Run Code"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Code Editor */}
        <div className="lg:col-span-7 rounded-3xl bg-slate-900/70 border border-slate-700/60 backdrop-blur-2xl p-4 shadow-2xl flex flex-col">
          <div className="text-xs font-mono text-slate-400 mb-2 flex items-center justify-between px-2">
            <span>script_runner.py</span>
            <span className="text-[10px] text-cyan-400">Python 3.11 Kernel</span>
          </div>
          <textarea 
            value={code} 
            onChange={(e) => setCode(e.target.value)}
            className="w-full flex-1 min-h-[380px] bg-slate-950 font-mono text-xs text-cyan-300 p-4 rounded-xl border border-slate-800 focus:outline-none focus:border-cyan-500/50 resize-y leading-relaxed"
          />
        </div>

        {/* Console Output */}
        <div className="lg:col-span-5 rounded-3xl bg-slate-900/70 border border-slate-700/60 backdrop-blur-2xl p-4 shadow-2xl flex flex-col">
          <div className="text-xs font-mono text-slate-400 mb-2 px-2 flex items-center justify-between">
            <span>Execution Console</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          </div>
          <pre className="w-full flex-1 min-h-[380px] bg-slate-950 font-mono text-[11px] text-slate-200 p-4 rounded-xl border border-slate-800 overflow-x-auto whitespace-pre-wrap leading-relaxed">
            {consoleOutput}
          </pre>
        </div>
      </div>
    </div>
  );
}

function ToolsTab({ tools, selectedTool, onSelectTool }) {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-slate-900/70 border border-slate-700/60 backdrop-blur-2xl p-6 shadow-2xl">
        <h2 className="text-xl font-bold text-white mb-1">Data Science Stack & Ecosystem</h2>
        <p className="text-xs text-slate-400">Core software libraries and frameworks utilized across Mohan Babu University Data Science labs.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map(tool => (
          <div 
            key={tool.id}
            className="rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 backdrop-blur-xl p-6 shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl">{tool.icon}</span>
              <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">{tool.version}</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-1">{tool.name}</h3>
            <div className="text-[11px] font-semibold text-cyan-400 mb-2">{tool.category}</div>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">{tool.desc}</p>
            <button className="w-full py-2 rounded-xl bg-slate-800 hover:bg-cyan-600 hover:text-white text-slate-300 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5">
              Documentation <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function MaterialsTab({ materials, selected, onSelect }) {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-slate-900/70 border border-slate-700/60 backdrop-blur-2xl p-6 shadow-2xl">
        <h2 className="text-xl font-bold text-white mb-1">Course PDF Materials & Lab Manuals</h2>
        <p className="text-xs text-slate-400">Download official MBU study guides, research notes, and faculty presentations.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* PDF List */}
        <div className="lg:col-span-4 space-y-3">
          {materials.map(mat => (
            <div 
              key={mat.id}
              onClick={() => onSelect(mat)}
              className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                selected.id === mat.id 
                  ? 'bg-slate-900 border-cyan-400 shadow-lg shadow-cyan-500/10' 
                  : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="text-xs font-bold text-white mb-1">{mat.title}</div>
              <div className="text-[11px] text-slate-400 flex items-center justify-between">
                <span>{mat.pages} Pages • {mat.size}</span>
                <span className="text-cyan-400 font-semibold">{mat.author}</span>
              </div>
            </div>
          ))}
        </div>

        {/* PDF Viewer Mock Window */}
        <div className="lg:col-span-8 rounded-3xl bg-slate-900/70 border border-slate-700/60 backdrop-blur-2xl p-6 shadow-2xl flex flex-col justify-between min-h-[450px]">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
              <div>
                <h3 className="text-md font-bold text-white">{selected.title}</h3>
                <p className="text-xs text-slate-400">Author: {selected.author} | Updated: {selected.date}</p>
              </div>
              <button className="px-3.5 py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs flex items-center gap-1.5 shadow-md shadow-cyan-500/20">
                <Download className="w-4 h-4" /> Download PDF
              </button>
            </div>

            {/* Mock Page Preview */}
            <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 flex items-center justify-center">
                <FileText className="w-8 h-8" />
              </div>
              <h4 className="text-sm font-bold text-slate-200">PDF Reader Interactive Preview</h4>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                Viewing page 1 of {selected.pages}. This document contains syllabus blueprints, analytical formulas, and experiment procedures.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
            <span>MBU DSAI Digital Library System</span>
            <span>Page 1 / {selected.pages}</span>
          </div>
        </div>
      </div>
    </div>
  );
}