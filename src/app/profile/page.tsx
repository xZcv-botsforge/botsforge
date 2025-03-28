"use client";

import BaseLayout from "@/components/layout";
import { SignIn } from "@/components/ui/auth";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { ReactElement, useState } from "react";
import { IoPerson } from "react-icons/io5";

export default function ProfilePage(): ReactElement {
	const { data: session } = useSession();
	const [newName, setNewName] = useState("");

	const ProfileImage = (): ReactElement =>
		session?.user?.image ? (
			<Image
				src={session?.user?.image}
				className="rounded-full mx-auto mb-4"
				alt="Profile"
				width={128}
				height={128}
				priority
			/>
		) : (
			<IoPerson fontSize={96} className="text-accent" />
		);

	const ProfileInformation = (): ReactElement =>
		session ? (
			<div className="col-span-2 space-y-6">
				<div className="p-6 rounded-lg shadow-sm">
					<h3 className="text-xl font-semibold mb-4">
						Profile Settings
					</h3>
					<form
						className="space-y-4"
						onSubmit={async () => {
							await fetch("/api/profile", {
								method: "PUT",
								body: JSON.stringify({
									id: session?.user?.id,
									name: newName,
								})
							});
						}}
					>
						<div>
							<label className="block text-sm font-medium mb-1">
								Name
							</label>
							<input
								className="nuinput w-full p-2 border rounded"
								onInput={(param) =>
									setNewName(param.currentTarget.value)
								}
							/>
						</div>
						<button
							type="submit"
							className="btn btn-sm btn-primary rounded-sm"
						>
							Save Changes
						</button>
					</form>
				</div>
			</div>
		) : (
			<SignIn provider="google" />
		);

	return (
		<BaseLayout>
			<div className="max-w-4xl mx-auto p-6">
				<h1 className="text-3xl font-bold mb-6">Profile</h1>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="col-span-1">
						<div className="p-4 rounded-lg flex flex-col items-center">
							<ProfileImage />
							<h2 className="text-xl font-semibold text-center">
								{session?.user?.name || "Anonymous"}
							</h2>
							<p className="text-center">
								{session?.user?.email}
							</p>
						</div>
					</div>
					<ProfileInformation />
				</div>
			</div>
		</BaseLayout>
	);
}
