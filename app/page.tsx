'use client'
import { useState } from "react";

export default function Home() {

	const [status, setStatus] = useState("");
	const [file, setFile] = useState<File | null>(null);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFile(e.target.files?.[0] || null);
		setStatus("");
	};

	const uploadImage = async () => {
		if (!file) return;

		setStatus("Requesting upload URL...");
		const fileName = `test-image-${Date.now()}-${file.name}`;
		const fileType = file.type;

		const res = await fetch("/api/upload-url", {
			method: "POST",
			body: JSON.stringify({ fileName, fileType }),
			headers: { "Content-Type": "application/json" },
		});

		const { url } = await res.json();

		setStatus("Uploading...");
		const uploadRes = await fetch(url, {
			method: "PUT",
			headers: { "Content-Type" : fileType },
			body: file,
		});

		if (uploadRes.ok) {
			setStatus(`Uploaded: ${fileName}`);
		} else {
			setStatus("Upload failed");
		}
	}

	return (
		<div className="p-4">
			<h1 className="text-lg font-semibold">Upload Image to R2</h1>
			<input
				type="file"
				accept="image/*"
				onChange={handleFileChange}
				className="bg-sky-700 text-white p-2 px-4 mr-2 rounded-xl"
			/>
			<button
				disabled={!file}
				onClick={uploadImage}
				className="px-4 py-2 bg-orange-500 text-white rounded disabled:opacity-50"
				>Upload Image</button>
			
			<p>{status}</p>
		</div>
	);
}
