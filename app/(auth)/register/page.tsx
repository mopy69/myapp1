"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirm, setConfirm] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError("");

		if (password !== confirm) {
			setError("Passwords do not match");
			return;
		}

		setLoading(true);

		try {
			const response = await fetch("/api/auth/register", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ name, email, password }),
			});

			if (!response.ok) {
				const data = await response.json();
				setError(data.message || "Registration failed");
				return;
			}

			router.push("/dashboard");
		} catch {
			setError("An error occurred. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="flex w-full items-center justify-center flex-1">
    		<div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
				<h1 className="text-2xl font-bold mb-6 text-center">Register</h1>

				{error && (
					<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
						{error}
					</div>
				)}

				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label className="block text-gray-700 font-semibold mb-2">Name</label>
						<input
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
							className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
							placeholder="Your name"
						/>
					</div>

					<div className="mb-4">
						<label className="block text-gray-700 font-semibold mb-2">Email</label>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
							placeholder="your@email.com"
						/>
					</div>

					<div className="mb-4">
						<label className="block text-gray-700 font-semibold mb-2">Password</label>
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
							className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
							placeholder="••••••••"
						/>
					</div>

					<div className="mb-6">
						<label className="block text-gray-700 font-semibold mb-2">Confirm Password</label>
						<input
							type="password"
							value={confirm}
							onChange={(e) => setConfirm(e.target.value)}
							required
							className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
							placeholder="••••••••"
						/>
					</div>

					<button
						type="submit"
						disabled={loading}
						className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white font-semibold py-2 rounded-lg transition"
					>
						{loading ? 'Registering...' : 'Register'}
					</button>
				</form>

				<p className="text-center text-gray-600 mt-4">
					Already have an account?{' '}
					<a href="/login" className="text-blue-500 hover:underline">Login</a>
				</p>
			</div>
		</div>
	);
}

