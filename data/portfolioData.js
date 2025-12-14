// Portfolio Data
export const portfolioData = {
  profile: {
    name: "Hrishikesh Atole",
    title: "Software Engineer",
    image: "/hri_img4.jpeg",
    email: "contact@hrishikeshatole.com",
    phone: "+91 7045215685",
    location: "Maharashtra, India",
    residence: "India",
    city: "Thane",
    bio: "Hey there! I’m Hrishikesh — a curious coder who loves building cool stuff with JavaScript & AI. From full-stack apps to smart tech, I turn ideas into interactive reality! Let’s build, break, and make magic on the web.",
    company: "Vernost Tech Ventures"
  },

  skills: [
    { name: "MERN/MEAN Stack Developer", level: 93 },
    { name: "Node Developer", level: 97 },
    { name: "Database Technologies", level: 94 },
    { name: "Cloud Technologies", level: 72 }
  ],

  tools: [
    { name: "Git", icon: "fab fa-git-alt", iconName: "git" },
    { name: "Docker", icon: "fab fa-docker", iconName: "docker" },
    { name: "MongoDB", icon: "fas fa-database", iconName: "mongodb" },
    { name: "AWS", icon: "fab fa-aws", iconName: "aws" },
    { name: "Figma", icon: "fab fa-figma", iconName: "figma" },
    { name: "VS Code", icon: "fas fa-code", iconName: "code" },
    { name: "Jira", icon: "fab fa-jira", iconName: "jira" },
    { name: "Postman", icon: "fas fa-terminal", iconName: "postman" }
  ],

  languages: [
    { name: "Marathi", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Native" }
  ],

  socialLinks: [
    { name: "GitHub", icon: "fab fa-github", iconName: "github", url: "https://github.com/HrishikeshAtole-24" },
    { name: "LinkedIn", icon: "fab fa-linkedin-in", iconName: "linkedin", url: "https://www.linkedin.com/in/hrishikesh-atole-b07a4a256" },
    { name: "Upwork", icon: "fas fa-briefcase", iconName: "upwork", url: "https://www.upwork.com/freelancers/~01a847670768913015" },
    { name: "LeetCode", icon: "fas fa-code", iconName: "leetcode", url: "https://leetcode.com/u/HrishikeshAtole/" }
  ],

  navigation: [
    { name: "Home", icon: "fas fa-home", iconName: "home", page: "home" },
    { name: "My Expertise", icon: "fas fa-code", iconName: "code", page: "expertise" },
    { name: "Background", icon: "fas fa-user-graduate", iconName: "user-graduate", page: "background" },
    { name: "Services", icon: "fas fa-cogs", iconName: "cogs", page: "services" },
    { name: "Portfolio", icon: "fas fa-folder-open", iconName: "folder-open", page: "portfolio" },
    { name: "Get In Touch", icon: "fas fa-envelope", iconName: "envelope", page: "contact" }
  ],

  typedTexts: [
    "Full-Stack Developer",
    "Software Engineer", 
    "Problem Solver",
    "Code Enthusiast"
  ],

  testimonials: [
    {
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      message: "Hrishikesh delivered exceptional work on our fintech platform. His expertise in payment integrations and attention to detail made our project a huge success.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CTO at StartupX",
      message: "Working with Hrishikesh was a game-changer for our team. His full-stack development skills and problem-solving approach helped us scale our application efficiently.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Developer at InnovateLab",
      message: "Hrishikesh's knowledge of modern technologies like React, Node.js, and cloud solutions is impressive. He consistently delivers high-quality, scalable code.",
      rating: 5
    },
    {
      name: "David Kumar",
      role: "Founder at DigitalSolutions",
      message: "His work on our e-commerce platform exceeded expectations. Great communication, timely delivery, and excellent technical skills make him a valuable partner.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      role: "Project Lead at CloudTech",
      message: "Hrishikesh's expertise in database design and API development helped us build a robust backend system. Highly recommended for any complex project.",
      rating: 5
    }
  ],

  expertise: {
    row1: [
      {
        title: "Full-Stack Development",
        description: "I specialize in building complete web applications using technologies like Java, React.js, Angular, Node.js, and Express.js. From creating responsive frontends to building robust backends and integrating APIs, I handle the entire development cycle efficiently."
      },
      {
        title: "JIRA & Bitbucket",
        description: "I've used JIRA for managing agile workflows, tracking bugs, and sprint planning. Bitbucket has been part of my version control and code review workflow, especially when working in teams using Git-based repositories."
      },
      {
        title: "GitHub",
        description: "GitHub is my go-to platform for managing source code, collaborating on projects, and maintaining clean version history. I frequently use pull requests, issue tracking, and GitHub Actions for continuous integration."
      }
    ],
    row2: [
      {
        title: "Database Management",
        description: "I'm experienced with both relational and NoSQL databases. I use MySQL for structured data, often with Workbench or DBeaver for visualization and queries. I also work with MongoDB for flexible, document-based storage. For cloud-native solutions, I use NeonDB (PostgreSQL) and Supabase, a Firebase alternative that instantly generates APIs."
      },
      {
        title: "Payment Integration",
        description: "I've integrated various payment gateways into web applications, ensuring secure and smooth transactions. These include Razorpay, payU, Epay and Juspay for Indian markets, and TheMap, Urbanledger, Ngenius, Paytabs, CuracaoPay, Payler, Myo! and Checkout.com for handling international payments."
      }
    ]
  },

  education: [
    {
      title: "B.E in Electronics & Telecommunication with Minor in Ai & ML",
      institution: "Rajiv Gandhi Institute of Technology, Mumbai",
      period: "2020 - 2024",
      cgpa: "7.75",
      description: "Gained a strong foundation in core Electronics and Telecommunication subjects such as digital systems, signal processing, embedded systems, and communication engineering. Alongside, pursued a minor in Artificial Intelligence and Machine Learning, covering data science, neural networks, and deep learning. Developed a strong interest in software engineering, combining knowledge of hardware and intelligent systems for innovative solutions."
    },
    {
      title: "Higher Secondary Certificate (HSC)",
      institution: "Shailendra Education Society, Mumbai",
      period: "2017 - 2020",
      percentage: "61%",
      description: "Focused on Physics, Chemistry, Mathematics, and Biology with computer science as an additional subject."
    },
    {
      title: "Secondary School Certificate (SSC)",
      institution: "St. Mary's High School, Mira Road",
      period: "2016 - 2017",
      percentage: "72%",
      description: "Completed foundational education with a strong emphasis on core subjects."
    }
  ],

  certifications: [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional",
    "Microsoft Azure Developer"
  ],

  experience: [
    {
      title: "Software Engineer",
      company: "Vernost Tech Ventures",
      period: "2024 - Present",
      description: "Started my career developing internal tools and contributing to the main product codebase.",
      achievements: [
        "Working on Vepay, a fintech platform enabling seamless digital payments and transaction management",
        "Integrated multiple global and domestic payment gateways including Razorpay, Juspay, Urbanledger, CuracaoPay, theMap, Payler, Ngenius, Paytabs and Checkout",
        "Built and maintained APIs for payment processing, transaction tracking, and settlement reconciliations",
        "Collaborated with cross-functional teams to deliver high-performance, real-time fintech features"
      ]
    },
  ],

  services: [
    {
      icon: "fas fa-code",
      title: "Full-Stack Web Development",
      description: "I build complete, end-to-end web solutions using powerful frontend and backend technologies. With frameworks like React.js and Angular, I develop responsive, user-friendly interfaces. On the backend, I use Java (Spring) or Node.js to create secure, scalable applications with RESTful APIs for seamless communication."
    },
    {
      icon: "fas fa-laptop-code",
      title: "Custom Website & Web App Development",
      description: "I develop tailored websites and web apps that align with business goals—ranging from landing pages and admin dashboards to full-fledged enterprise systems. My solutions include user authentication, role-based access control, and interactive dashboards with real-time features using WebSockets."
    },
    {
      icon: "fas fa-database",
      title: "Database Design & Management",
      description: "I design efficient, scalable, and secure database architectures using both SQL (MySQL, PostgreSQL) and NoSQL (MongoDB) technologies. I ensure data integrity, normalization, and performance optimization using tools like DBeaver, Workbench, and modern cloud-native solutions."
    }
  ],

  portfolio: [
    {
      title: "E-Commerce Platform",
      category: "web",
      image: "https://via.placeholder.com/400x300/2ecc71/ffffff?text=E-Commerce+Platform",
      description: "Full-stack e-commerce solution with payment integration",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Fitness Tracker App",
      category: "mobile",
      image: "https://via.placeholder.com/400x300/2ecc71/ffffff?text=Fitness+Tracker",
      description: "React Native app with health monitoring features",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather API Service",
      category: "api",
      image: "https://via.placeholder.com/400x300/2ecc71/ffffff?text=Weather+API",
      description: "Scalable weather data API with real-time updates",
      demoUrl: "#",
      githubUrl: "#"
    }
  ],

  codeSnippets: [
    {
      lines: [
        "const express = require('express');",
        "const app = express();",
        "const cors = require('cors');",
        "const port = process.env.PORT || 3000;",
        "",
        "app.use(cors());",
        "app.use(express.json());",
        "",
        "app.get('/api/users', async (req, res) => {",
        "  try {",
        "    const users = await User.find().select('-password');",
        "    res.json(users);",
        "  } catch (error) {",
        "    res.status(500).json({ message: error.message });",
        "  }",
        "});",
        "",
        "app.listen(port, () => {",
        "  console.log(`Server running on port ${port}`);",
        "});"
      ]
    },
    {
      lines: [
        "import React, { useState, useEffect } from 'react';",
        "import { motion, AnimatePresence } from 'framer-motion';",
        "",
        "const Portfolio = () => {",
        "  const [projects, setProjects] = useState([]);",
        "  const [loading, setLoading] = useState(true);",
        "  const [filter, setFilter] = useState('all');",
        "",
        "  useEffect(() => {",
        "    const fetchProjects = async () => {",
        "      try {",
        "        const response = await fetch('/api/projects');",
        "        const data = await response.json();",
        "        setProjects(data);",
        "      } catch (error) {",
        "        console.error('Error fetching projects:', error);",
        "      } finally {",
        "        setLoading(false);",
        "      }",
        "    };",
        "    fetchProjects();",
        "  }, []);",
        "",
        "  return (",
        "    <div className='portfolio-container'>",
        "      {projects.map(project => (",
        "        <ProjectCard key={project.id} project={project} />",
        "      ))}",
        "    </div>",
        "  );",
        "};"
      ]
    },
    {
      lines: [
        "const mongoose = require('mongoose');",
        "const bcrypt = require('bcryptjs');",
        "const jwt = require('jsonwebtoken');",
        "const userSchema = new mongoose.Schema({",
        "  username: {",
        "    type: String,",
        "    required: true,",
        "    unique: true,",
        "    trim: true",
        "  },",
        "  email: {",
        "    type: String,",
        "    required: true,",
        "    unique: true,",
        "    lowercase: true",
        "  },",
        "  password: {",
        "    type: String,",
        "    required: true,",
        "    minlength: 6",
        "  },",
        "  role: {",
        "    type: String,",
        "    enum: ['user', 'admin'],",
        "    default: 'user'",
        "  }",
        "}, { timestamps: true });",
        "module.exports = mongoose.model('User', userSchema);"
      ]
    },
    {
      lines: [
        "const authenticateToken = (req, res, next) => {",
        "  const authHeader = req.headers['authorization'];",
        "  const token = authHeader && authHeader.split(' ')[1];",
        "  if (!token) {",
        "    return res.status(401).json({",
        "      success: false,",
        "      message: 'Access token required'",
        "    });",
        "  }",
        "  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {",
        "    if (err) {",
        "      return res.status(403).json({",
        "        success: false,",
        "        message: 'Invalid or expired token'",
        "      });",
        "    }",
        "    req.user = user;",
        "    next();",
        "  });",
        "};"
      ]
    },
    {
      lines: [
        "const { GraphQLObjectType, GraphQLString, GraphQLID } = require('graphql');",
        "const User = require('../models/User');",
        "const UserType = new GraphQLObjectType({",
        "  name: 'User',",
        "  fields: () => ({",
        "    id: { type: GraphQLID },",
        "    username: { type: GraphQLString },",
        "    email: { type: GraphQLString },",
        "    createdAt: { type: GraphQLString }",
        "  })",
        "});",
        "const RootQuery = new GraphQLObjectType({",
        "  name: 'RootQueryType',",
        "  fields: {",
        "    user: {",
        "      type: UserType,",
        "      args: { id: { type: GraphQLID } },",
        "      resolve(parent, args) {",
        "        return User.findById(args.id);",
        "      }",
        "    }",
        "  }",
        "});",
        "module.exports = new GraphQLSchema({ query: RootQuery });"
      ]
    },
    {
      lines: [
        "import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';",
        "export const fetchUser = createAsyncThunk(",
        "  'user/fetchUser',",
        "  async (userId, { rejectWithValue }) => {",
        "    try {",
        "      const response = await fetch(`/api/users/${userId}`);",
        "      if (!response.ok) throw new Error('Failed to fetch');",
        "      return await response.json();",
        "    } catch (error) {",
        "      return rejectWithValue(error.message);",
        "    }",
        "  }",
        ");",
        "const userSlice = createSlice({",
        "  name: 'user',",
        "  initialState: { data: null, loading: false, error: null },",
        "  reducers: {",
        "    clearUser: (state) => { state.data = null; }",
        "  },",
        "  extraReducers: (builder) => {",
        "    builder.addCase(fetchUser.fulfilled, (state, action) => {",
        "      state.data = action.payload;",
        "      state.loading = false;",
        "    });",
        "  }",
        "});",
        "export default userSlice.reducer;"
      ]
    }
  ]
};