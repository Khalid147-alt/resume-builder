"use client"
// pages/index.tsx
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    education: '',
    experience: '',
    currentPosition: '',
    certifications: '',
    projects: '',
    skills: '',
  });

  const [submitted, setSubmitted] = useState(false); // Track if form is submitted

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true); // Mark form as submitted
  };

  const handlePrint = () => {
    window.print(); // Trigger browser's print functionality
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-blue-600 mb-8">Resume Builder</h1>

      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        {!submitted && (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200 text-green-800"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200 text-green-800"
                placeholder="Enter your email address"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200 text-green-800"
                placeholder="Enter a password"
                required
              />
            </div>

            {/* Current Position */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="currentPosition">
                Current Position
              </label>
              <input
                type="text"
                name="currentPosition"
                id="currentPosition"
                value={formData.currentPosition}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200 text-green-800"
                placeholder="Enter your current position"
                required
              />
            </div>

            {/* Education */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="education">
                Education
              </label>
              <textarea
                name="education"
                id="education"
                value={formData.education}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200 text-green-800"
                placeholder="Enter your educational background"
                rows={3}
                required
              />
            </div>

            {/* Certifications */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="certifications">
                Certifications
              </label>
              <textarea
                name="certifications"
                id="certifications"
                value={formData.certifications}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200 text-green-800"
                placeholder="Enter your certifications"
                rows={2}
                required
              />
            </div>

            {/* Projects with Links */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="projects">
                Projects (with Links)
              </label>
              <textarea
                name="projects"
                id="projects"
                value={formData.projects}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200 text-green-800"
                placeholder="List your projects and their links"
                rows={3}
                required
              />
            </div>

            {/* Experience */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="experience">
                Work Experience
              </label>
              <textarea
                name="experience"
                id="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200 text-green-800"
                placeholder="Enter your work experience"
                rows={3}
                required
              />
            </div>

            {/* Skills */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="skills">
                Skills
              </label>
              <textarea
                name="skills"
                id="skills"
                value={formData.skills}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200 text-green-800"
                placeholder="List your skills"
                rows={3}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full max-w-xs bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out"
              >
                Submit Resume
              </button>
            </div>
          </form>
        )}

        {submitted && (
          <div className="mt-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">Your Resume</h2>

            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <p className="text-lg text-green-900">
                <strong>Name:</strong> {formData.name}
              </p>
              <p className="text-lg text-green-900">
                <strong>Email:</strong> {formData.email}
              </p>
              <p className="text-lg text-green-900">
                <strong>Current Position:</strong> {formData.currentPosition}
              </p>
              <p className="text-lg text-green-900">
                <strong>Education:</strong> {formData.education}
              </p>
              <p className="text-lg text-green-900">
                <strong>Certifications:</strong> {formData.certifications}
              </p>
              <p className="text-lg text-green-900">
                <strong>Projects:</strong> {formData.projects}
              </p>
              <p className="text-lg text-green-900">
                <strong>Work Experience:</strong> {formData.experience}
              </p>
              <p className="text-lg text-green-900">
                <strong>Skills:</strong> {formData.skills}
              </p>
            </div>

            {/* Print Button */}
            <div className="mt-6 flex justify-center">
              <button
                onClick={handlePrint}
                className="bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200 ease-in-out"
              >
                Print Resume
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
