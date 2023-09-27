import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eec170',
  templateUrl: './eec170.component.html',
  styleUrls: ['./eec170.component.css']
})
export class Eec170Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  courseTitle = "EEC 179: Applied Machine Learning for Electrical and Computer Engineers";
  instructorName = "Houman Homayoun";
  instructorEmail = "hhomayoun@ucdavis.edu";
  officeHour = "3185 Kemper Hall";

  courseObjectives = `
    The recent popularity gained by the field of machine learning (ML) has led to its adaptation into
    almost all the known applications. The applications range from smart homes, smart grids, and
    forex markets to military applications and autonomous drones. There exists a plethora of
    machine learning techniques that were introduced in the past few years, and each of these
    techniques fits greatly for a specific set of applications rather than a one-size-fits-all approach. In
    order to better determine the application of ML for a given problem, it is nontrivial to understand
    the current state of the art of the existing ML techniques, pros and cons, their behavior, and
    existing applications that have already adopted them. This introductory course to applied ML
    thus aims at researchers and practitioners who are familiar with their application requirements,
    and are interested in the application of ML techniques in their applications not only for better
    performance but also for ensuring that the adopted ML technique is not an overkill to the
    considered application. This course will provide a structured introduction and relevant
    background to aspiring engineers who are new to the field, while also helping to revise the
    background for the researchers familiar with this field. This introduction will be further used to
    build and introduce current and emerging ML paradigms and their applications in multiple case
    studies.
  `;

  courseOutline = [
    "Understanding the Foundations of ML and AI",
    "Basics of Statistics: Exploring Variance, Co-variance, and Correlation",
    "Machine Learning Essentials I: Techniques for Model Evaluation (Cross-Validation, Confusion Matrix, Sensitivity, Specificity, Precision, Recall, Understanding Bias and Variance)",
    "Machine Learning Essentials II: ROC Curves, AUC, and Entropy Concepts",
    "Data Fitting Techniques: Linear Regression and Least Squares Method",
    "Advanced Linear Regression: Delving into Multiple Regression Analysis",
    "Exploring Odds: Understanding Odds and Log(Odds), Odds Ratios, and Log(Odds Ratios)",
    "Logistic Regression Analysis: Coefficients, Maximum Likelihood Estimation, R-squared, and p-value",
    "Regularization Techniques I: Ridge (L2) Regression",
    "Regularization Techniques II: Lasso (L1) Regression",
    "Comparative Analysis: Ridge vs Lasso Regression",
    "Regularization Techniques III: Elastic Net Regression",
    "Introduction to Principal Component Analysis (PCA)",
    "PCA in Practice: Tips and Underlying Principles",
    "Hierarchical Clustering: A Comprehensive Guide",
    "K-means Clustering: Theory and Applications",
    "K-Nearest Neighbors: Classification and Regression",
    "Naive Bayes Classifier: Theory and Practice",
    "Decision Trees I: Building and Using Classification Trees",
    "Decision Trees II: Feature Selection and Handling Missing Data",
    "Encoding Techniques: One-Hot, Label, Target, and K-Fold Target Encoding",
    "Random Forests I: Construction, Utilization, and Evaluation",
    "Random Forests II: Addressing Missing Data and Clustering Techniques",
    "Mathematical Foundations: Understanding the Chain Rule",
    "Optimization Techniques: Gradient Descent Explained",
    "Stochastic Gradient Descent: A Practical Approach",
    "Boosting Algorithms: An Introduction to AdaBoost",
    "Measuring Similarity: Understanding Cosine Similarity",
    "Support Vector Machines I: Core Concepts and Principles",
    "Support Vector Machines II: Exploring the Polynomial Kernel",
    "Neural Networks I: An Introductory Overview and Demystifying the Black Box",
    "Neural Networks II: Backpropagation - Core Concepts",
    "Deep Dive into Backpropagation I: Simultaneous Optimization of Multiple Parameters",
    "Deep Dive into Backpropagation II: Leveraging the Chain Rule",
    "Neural Networks III: Understanding and Implementing ReLU",
    "Neural Networks IV: Managing Multiple Inputs and Outputs",
    "Neural Networks V: Exploring ArgMax and SoftMax Functions",
    "Unveiling the SoftMax Function: Derivation and Applications",
    "Neural Networks VI: Cross-Entropy - Theory and Applications",
    "Neural Networks VII: Advanced Concepts in Cross-Entropy and Backpropagation",
    "Lec-19-Computational-Complexity-ML" // You can add more lectures as needed
  ];

  classMeetings = "Two days a week";
  prerequisites = "Statistics";

  textbook1 = "Machine Learning for Computer Scientists and Data Analysts, From an Applied Perspective 3, Springer Nature, 2022, Setareh Rafatirad · Houman Homayoun Zhiqian Chen · Sai Manoj Pudukotai Dinakarrao";
  textbook2 = "The StatQuest Illustrated Guide To Machine Learning Paperback – November 7, 2022 by Josh Starmer";

  exams = "This course includes one Midterm exam and a Final exam. All exams are cumulative. All exams are closed book.";

  lectures = [
    "Lec-1-Introduction",
    "Lec-2-Linear Regression",
    "Lec-3-Gradeint Descent",
    "Lec-4-logistic-regression",
    "Lec-5-Regularization",
    "Lec-6-Metrics",
    "Lec-7-One-Hot_Label_Target_K-Fold",
    "Lec-8-Decision and Classification Trees",
    "Lec-9-Random Forests",
    "Lec-10-Hierarchical Clustering",
    "Lec-11-K-Nearest",
    "Lec-12-K-Means",
    "Lec-13-Principal Component Analysis (PCA)",
    "Lec-14-NaiveBayes",
    "Lec-15-SVM",
    "Lec-16-NN_part1",
    "Lec-17-NN_backpropagation_part2",
    "Lec-18-NN_part3",
    "Lec-19-Computational-Complexity-ML"
  ];
  lectureLinks = [
    "https://drive.google.com/file/d/12ut9kfU-Mo1OyV24GUPEn8T3tjHnbtU8/view?usp=drive_link",
    "https://drive.google.com/file/d/1Arm_9sLdoyoY68XjB4vqkcS8z2sC_Odt/view?usp=sharing",
    "https://drive.google.com/file/d/11739xrdgne8AqCgvvTth74d9nnr7jsUs/view?usp=sharing",
    "https://drive.google.com/file/d/1AAn9qKOo9e2FNdpUz_KvH_FhsXbqQiqN/view?usp=sharing",
    // Add links for more lectures here...
  ];

  paperPresentation = `
    In this segment of the Applied Machine Learning course, students will immerse themselves in
    the exploration and analysis of pivotal research papers that are shaping the field. This hands-on
    approach aims to deepen their understanding of advanced machine learning techniques and
    applications, fostering their skills in interpreting and critically evaluating academic literature.
    Students will have the opportunity to present and discuss these papers, encouraging a
    collaborative learning environment where they can develop their analytical and presentation
    skills, while enhancing their comprehension of applied machine learning concepts.
    Suggested topics include, but are not limited to:
    1. Analyzing Hardware Based Malware Detectors
    2. Ensemble Learning for Effective Run-Time Hardware-Based Malware Detection: A Comprehensive Analysis and Classification
    3. Efficient Utilization of Adversarial Training towards Robust Machine Learners and its Analysis
    4. Energy-Efficient Acceleration of Big Data Analytics Applications Using FPGAs
    5. A Low Cost EDA-based Stress Detection Using Machine Learning
    6. Convolution Neural Network for Pain Intensity Assessment from Facial Expression
    7. Convolution Neural Network for Pain Intensity Assessment from Facial Expression
    8. DNN Model Architecture Fingerprinting Attack on CPU-GPU Edge Devices
    9. Survey of Machine Learning for Electronic Design Automation
    10. Pain Level Modeling of Intensive Care Unit patients with Machine Learning Methods: An Effective Congeneric Clustering-based Approach
    11. R 2AD: Randomization and Reconstructor-based Adversarial Defense for Deep Neural Networks
    12. Pyramid: Machine Learning Framework to Estimate the Optimal Timing and Resource Usage of a High-Level Synthesis Design
    13. Adversarial Attack on Microarchitectural Events based Malware Detectors
    14. Resource-Efficient Wearable Computing for Real-Time Reconfigurable Machine Learning: A Cascading Binary Classification
    15. 2SMaRT: A Two-Stage Machine Learning-Based Approach for Run-Time Specialized Hardware-Assisted Malware Detection
    16. XPPE: Cross-Platform Performance Estimation of Hardware Accelerators Using Machine Learning
  `;

  courseGrade = `
  The exams, assignments, projects, and class problems will be used to determine your final grade
  according to the following weighting:
`;

}
