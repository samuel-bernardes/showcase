import {
	EnvelopeIcon,
	MapPinIcon,
	PhoneIcon,
} from '@heroicons/react/24/outline';

function Contact() {
	return (
		<div className="relative isolate overflow-hidden bg-gradient-to-b from-gray-100/20 dark:from-gray-900/20 mx-auto max-w-7xl px-4 py-24 sm:px-8">
			<div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
				{/* Seção de Informações */}
				<div>
					<h2 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
						Entre em contato comigo
					</h2>
					<p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
						Quer discutir um projeto, colaborar ou apenas bater um
						papo sobre tecnologia? Estou sempre aberto a novas
						conexões e oportunidades.
					</p>

					<div className="space-y-6 mt-8">
						<div className="flex items-center gap-4">
							<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-violet-100 dark:bg-violet-900/30">
								<EnvelopeIcon className="h-6 w-6 text-violet-600 dark:text-violet-400" />
							</div>
							<div>
								<h3 className="text-base font-medium text-gray-900 dark:text-white">
									Email
								</h3>
								<p className="text-gray-600 dark:text-gray-400">
									sbernardes467@gmail.com
								</p>
							</div>
						</div>

						<div className="flex items-center gap-4">
							<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-violet-100 dark:bg-violet-900/30">
								<PhoneIcon className="h-6 w-6 text-violet-600 dark:text-violet-400" />
							</div>
							<div>
								<h3 className="text-base font-medium text-gray-900 dark:text-white">
									Telefone
								</h3>
								<p className="text-gray-600 dark:text-gray-400">
									+55 (31) 99994-3563
								</p>
							</div>
						</div>

						<div className="flex items-center gap-4">
							<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-violet-100 dark:bg-violet-900/30">
								<MapPinIcon className="h-6 w-6 text-violet-600 dark:text-violet-400" />
							</div>
							<div>
								<h3 className="text-base font-medium text-gray-900 dark:text-white">
									Localização
								</h3>
								<p className="text-gray-600 dark:text-gray-400">
									Belo Horizonte, Minas Gerais - Brasil
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Formulário de Contato */}
				<div className="rounded-xl bg-white/5 p-8 shadow-lg ring-1 ring-gray-200 dark:ring-gray-800">
					<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
						Envie uma mensagem
					</h3>
					<form className="space-y-6">
						<div>
							<label
								htmlFor="name"
								className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
							>
								Nome
							</label>
							<input
								type="text"
								id="name"
								name="name"
								className="block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm bg-white/50 dark:bg-gray-800/50 focus:ring-violet-500 focus:border-violet-500 px-4 py-2 text-gray-900 dark:text-white"
							/>
						</div>

						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								className="block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm bg-white/50 dark:bg-gray-800/50 focus:ring-violet-500 focus:border-violet-500 px-4 py-2 text-gray-900 dark:text-white"
							/>
						</div>

						<div>
							<label
								htmlFor="subject"
								className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
							>
								Assunto
							</label>
							<input
								type="text"
								id="subject"
								name="subject"
								className="block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm bg-white/50 dark:bg-gray-800/50 focus:ring-violet-500 focus:border-violet-500 px-4 py-2 text-gray-900 dark:text-white"
							/>
						</div>

						<div>
							<label
								htmlFor="message"
								className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
							>
								Mensagem
							</label>
							<textarea
								id="message"
								name="message"
								rows={4}
								className="block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm bg-white/50 dark:bg-gray-800/50 focus:ring-violet-500 focus:border-violet-500 px-4 py-2 text-gray-900 dark:text-white"
							></textarea>
						</div>

						<div>
							<button
								type="submit"
								className="inline-flex justify-center rounded-lg bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 transition-colors"
							>
								Enviar mensagem
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Contact;
