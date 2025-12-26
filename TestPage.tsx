import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Button } from './components/ui/button';
import { CheckCircle2, Share2, ExternalLink } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function TestPage() {
  const handleCopyLink = () => {
    const currentUrl = window.location.origin;
    navigator.clipboard.writeText(currentUrl);
    toast.success('Link copiado para a área de transferência!');
  };

  const handleShareWhatsApp = () => {
    const currentUrl = window.location.origin;
    const message = `Confira o site da EMD Serviços! ${currentUrl}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full shadow-2xl border-0 bg-gray-800/80 backdrop-blur-md">
        <CardHeader className="bg-gradient-to-r from-cyan-600 to-cyan-500 text-white rounded-t-lg">
          <CardTitle className="flex items-center gap-3 text-3xl">
            <CheckCircle2 className="w-8 h-8" />
            Link de Teste - EMD Serviços
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8 space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl text-white">
              Site pronto para testar! 🎉
            </h2>
            <p className="text-gray-300 text-lg">
              Este é o link de teste do site da EMD Serviços. Compartilhe com pessoas para testar todas as funcionalidades antes de publicar oficialmente.
            </p>
            
            <div className="bg-gray-700/50 p-4 rounded-lg border border-cyan-500/30">
              <p className="text-sm text-gray-400 mb-2">Link de Teste:</p>
              <p className="text-cyan-400 break-all font-mono">{window.location.origin}</p>
            </div>

            <div className="space-y-3 pt-4">
              <h3 className="text-xl text-white">Funcionalidades para testar:</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                  <span>Menu de navegação e links (Instagram, Marcações, Quem Somos)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                  <span>Seção "Nossos Trabalhos" com 7 serviços</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                  <span>Formulário de marcação que envia para WhatsApp</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                  <span>Botões flutuantes de WhatsApp e Instagram</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                  <span>Responsividade em diferentes tamanhos de tela</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              onClick={handleCopyLink}
              className="flex-1 bg-cyan-600 hover:bg-cyan-700"
              size="lg"
            >
              <Share2 className="w-5 h-5 mr-2" />
              Copiar Link
            </Button>
            <Button
              onClick={handleShareWhatsApp}
              className="flex-1 bg-green-600 hover:bg-green-700"
              size="lg"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Compartilhar no WhatsApp
            </Button>
          </div>

          <div className="pt-4 border-t border-gray-700">
            <a
              href="/"
              className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Ver o site completo
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default TestPage;
