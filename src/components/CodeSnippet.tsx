function CodeSnippet() {
	return (
		<div className="relative isolate overflow-hidden bg-violet-400 dark:bg-violet-600 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pt-16 sm:pr-0 sm:pl-16 lg:mx-0 lg:max-w-none">
			<div
				aria-hidden="true"
				className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-violet-100 dark:bg-violet-50 opacity-20 ring-1 ring-white ring-inset"
			/>
			<div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
				<div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900 ring-1 ring-white/10">
					<div className="flex bg-gray-800/40 ring-1 ring-white/5">
						<div className="-mb-px flex text-sm/6 font-medium text-gray-400">
							<div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
								Profile.js
							</div>
							<div className="border-r border-gray-600/10 px-4 py-2">
								App.jsx
							</div>
						</div>
					</div>
					<div className="px-6 pt-6 pb-14 bg-[#282a36] rounded-lg overflow-hidden">
						<div className="flex gap-2 mb-4">
							<div className="w-3 h-3 rounded-full bg-[#ff5555]"></div>
							<div className="w-3 h-3 rounded-full bg-[#f1fa8c]"></div>
							<div className="w-3 h-3 rounded-full bg-[#50fa7b]"></div>
						</div>

						<pre className="text-sm font-mono overflow-x-auto">
							<code className="text-[#f8f8f2]">
								<span className="text-[#6272a4]">
									// profile.js
								</span>
								<br />
								<span className="text-[#8be9fd]">
									const
								</span>{' '}
								<span className="text-[#50fa7b]">profile</span>{' '}
								<span className="text-[#ff79c6]">=</span>{' '}
								<span className="text-[#ff79c6]">{'{'}</span>
								<br />
								<span className="text-[#f1fa8c] ml-4">
									name
								</span>
								<span className="text-[#ff79c6]">:</span>{' '}
								<span className="text-[#f1fa8c]">
									"SAMUEL BERNARDES LOPES SANTOS"
								</span>
								<span className="text-[#ff79c6]">,</span>
								<br />
								<span className="text-[#f1fa8c] ml-4">
									acknowledgements
								</span>
								<span className="text-[#ff79c6]">:</span>{' '}
								<span className="text-[#ff79c6]">[</span>
								<span className="text-[#f1fa8c]">"REACT"</span>
								<span className="text-[#ff79c6]">,</span>{' '}
								<span className="text-[#f1fa8c]">
									"REACT NATIVE"
								</span>
								<span className="text-[#ff79c6]">,</span>{' '}
								<span className="text-[#f1fa8c]">".NET"</span>
								<span className="text-[#ff79c6]">,</span>{' '}
								<span className="text-[#f1fa8c]">"NODE"</span>
								<span className="text-[#ff79c6]">]</span>
								<span className="text-[#ff79c6]">,</span>
								<br />
								<span className="text-[#f1fa8c] ml-4">
									primarySkillset
								</span>
								<span className="text-[#ff79c6]">:</span>{' '}
								<span className="text-[#ff79c6]">[</span>
								<span className="text-[#f1fa8c]">
									"Trabalho em equipe"
								</span>
								<span className="text-[#ff79c6]">,</span>{' '}
								<span className="text-[#f1fa8c]">
									"Comunicação"
								</span>
								<span className="text-[#ff79c6]">,</span>{' '}
								<span className="text-[#f1fa8c]">
									"Interação com cliente"
								</span>
								<span className="text-[#ff79c6]">,</span>{' '}
								<span className="text-[#f1fa8c]">
									"Persistente"
								</span>
								<span className="text-[#ff79c6]">]</span>
								<span className="text-[#ff79c6]">,</span>
								<br />
								<span className="text-[#f1fa8c] ml-4">
									languages
								</span>
								<span className="text-[#ff79c6]">:</span>{' '}
								<span className="text-[#ff79c6]">[</span>
								<span className="text-[#f1fa8c]">"Python"</span>
								<span className="text-[#ff79c6]">,</span>{' '}
								<span className="text-[#f1fa8c]">
									"JavaScript"
								</span>
								<span className="text-[#ff79c6]">,</span>{' '}
								<span className="text-[#f1fa8c]">
									"Typescript"
								</span>
								<span className="text-[#ff79c6]">,</span>{' '}
								<span className="text-[#f1fa8c]">"C#"</span>
								<span className="text-[#ff79c6]">,</span>{' '}
								<span className="text-[#f1fa8c]">"C"</span>
								<span className="text-[#ff79c6]">,</span>{' '}
								<span className="text-[#f1fa8c]">"Java"</span>
								<span className="text-[#ff79c6]">]</span>
								<br />
								<span className="text-[#ff79c6]">{'}'}</span>
							</code>
						</pre>
					</div>
				</div>
			</div>
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 ring-1 ring-white/10 ring-inset sm:rounded-3xl"
			/>
		</div>
	);
}

export default CodeSnippet;
