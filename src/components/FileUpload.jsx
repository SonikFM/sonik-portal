import { cn } from "@/lib/utils";
import UploadIcon from "@/svgs/UploadIcon";
import React, { useState, useRef } from "react";

const FileUpload = ({ children, title, description, allowedFormats = ["jpeg", "png"],wrapperClass, ...rest }) => {
	const [file, setFile] = useState(null);
	const [error, setError] = useState(null);
	const fileInputRef = useRef(null);

	const validateFile = (file) => {
		const fileType = file.type.split("/")[1];
		if (!allowedFormats.includes(fileType)) {
			setError(
				`Invalid file format. Only ${allowedFormats.join(
					", "
				)} files are allowed.`
			);
			return false;
		}
		setError(null);
		return true;
	};

	const handleFileChange = (event) => {
		const selectedFile = event.target.files[0];
		if (selectedFile && validateFile(selectedFile)) {
			setFile(
				Object.assign(selectedFile, {
					preview: URL.createObjectURL(selectedFile),
				})
			);
			if (error) {
				setError(null);
			}
		}
	};

	const handleDragOver = (event) => {
		event.preventDefault();
	};

	const handleDrop = (event) => {
		event.preventDefault();
		const droppedFile = event.dataTransfer.files[0];
		if (droppedFile && validateFile(droppedFile)) {
			setFile(
				Object.assign(droppedFile, {
					preview: URL.createObjectURL(droppedFile),
				})
			);
			if (error) {
				setError(null);
			}
		}
	};

	return (
		<div
			className={cn("w-full h-full p-6 text-center border border-dashed rounded-md cursor-pointer border-grey-100", wrapperClass)}
			onDragOver={handleDragOver}
			onDrop={handleDrop}
			onClick={() => fileInputRef.current.click()}
		>
			<input
				type="file"
				ref={fileInputRef}
				style={{ display: "none" }}
				onChange={handleFileChange}
				accept="image/jpeg"
				{...rest}
			/>
			{children ||
				(!file ? (
					<div className="flex flex-col items-center justify-center w-full h-full">
						<UploadIcon className="text-grey-100" />
						<h3 className="mt-5 text-sm font-medium text-white">
							{title || "Choose a file or drag & drop it here."}
						</h3>
						<p className="text-xs text-grey-100 mt-1.5">
							{description ||
								"JPEG file only & size should be (768x768) pixels"}
						</p>
						{error && <p className="text-xs text-warning mt-1.5">{error}</p>}
					</div>
				) : (
					<div className="w-full h-full">
						<img
							src={file.preview}
							alt="Preview"
							className="object-cover w-full h-full rounded-md"
						/>
					</div>
				))}
		</div>
	);
};

export default FileUpload;
