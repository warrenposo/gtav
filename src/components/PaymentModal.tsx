import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Bitcoin, Check, CreditCard, Download, Loader2, QrCode, Smartphone } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  version: 'pc' | 'mobile' | null;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, version }) => {
  const [activeTab, setActiveTab] = useState("btc");
  const [paymentStatus, setPaymentStatus] = useState<'initial' | 'processing' | 'confirmed'>('initial');
  
  // Log when component renders
  console.log("PaymentModal render - isOpen:", isOpen, "version:", version);
  
  // Reset payment status when modal opens
  useEffect(() => {
    if (isOpen) {
      console.log("Modal opened for version:", version);
      setPaymentStatus('initial');
      setActiveTab("btc");
    }
  }, [isOpen, version]);
  
  const handleCopyAddress = (address: string, type: string) => {
    navigator.clipboard.writeText(address);
    toast.success(`${type} address copied to clipboard!`);
  };
  
  const handleProceedToDownload = () => {
    console.log("Processing payment...");
    setPaymentStatus('processing');
    
    // Simulate payment processing
    setTimeout(() => {
      setPaymentStatus('confirmed');
      console.log("Payment confirmed");
    }, 3000);
  };
  
  const handleDownload = () => {
    console.log("Download initiated");
    toast.success(`Thank you for your payment! Your download will start shortly.`);
    onClose();
    
    // Reset for future use
    setTimeout(() => {
      setPaymentStatus('initial');
    }, 500);
  };

  // Make sure we're showing the correct amount based on version
  const amount = version === 'pc' ? '$25' : '$10';
  
  // QR code URLs for each cryptocurrency address
  const qrUrls = {
    btc: `https://chart.googleapis.com/chart?cht=qr&chl=bitcoin:163JAzy3CEz8YoNGDDtu9KxpXgnm5Kn9Rs&chs=200x200&choe=UTF-8&chld=L|2`,
    eth: `https://chart.googleapis.com/chart?cht=qr&chl=ethereum:0x8c0fd3fdc6f56e658fb1bffa8f5ddd65388ba690&chs=200x200&choe=UTF-8&chld=L|2`,
    trc: `https://chart.googleapis.com/chart?cht=qr&chl=tron:THaAnBqAvQ3YY751nXqNDzCoczYVQtBKnP&chs=200x200&choe=UTF-8&chld=L|2`
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="modal-bg border-gta-neon/30 sm:max-w-[500px] text-white">
        {paymentStatus === 'initial' && (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl text-center gta-title text-gta-neon animate-glow">
                Complete Your Payment
              </DialogTitle>
              <DialogDescription className="text-center text-muted-foreground py-2">
                {version === 'pc' ? 'PC Version' : 'Mobile Version'} - {amount}
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-6">
              <Tabs defaultValue="btc" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-3 bg-background/30">
                  <TabsTrigger value="btc" className="data-[state=active]:text-gta-neon">
                    <Bitcoin className="mr-2 h-4 w-4" />
                    BTC
                  </TabsTrigger>
                  <TabsTrigger value="eth" className="data-[state=active]:text-gta-purple">
                    <CreditCard className="mr-2 h-4 w-4" />
                    ETH
                  </TabsTrigger>
                  <TabsTrigger value="trc" className="data-[state=active]:text-gta-pink">
                    <CreditCard className="mr-2 h-4 w-4" />
                    TRC 20
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="btc" className="space-y-4 pt-4">
                  <div className="crypto-card p-4 rounded-lg">
                    <div className="text-center mb-4">
                      <h4 className="font-medium">Send {amount} worth of BTC to:</h4>
                    </div>
                    <div className="flex flex-col space-y-4">
                      <div className="flex justify-center">
                        <div className="bg-white p-2 rounded-md">
                          <img src={qrUrls.btc} alt="Bitcoin QR Code" width={150} height={150} />
                        </div>
                      </div>
                      <div className="flex items-center justify-between bg-black/30 p-3 rounded-md">
                        <code className="text-xs sm:text-sm text-gta-neon break-all">
                          163JAzy3CEz8YoNGDDtu9KxpXgnm5Kn9Rs
                        </code>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleCopyAddress('163JAzy3CEz8YoNGDDtu9KxpXgnm5Kn9Rs', 'BTC')}
                          className="ml-2 text-gta-neon border-gta-neon/50 hover:bg-gta-neon/10"
                        >
                          Copy
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="eth" className="space-y-4 pt-4">
                  <div className="crypto-card p-4 rounded-lg">
                    <div className="text-center mb-4">
                      <h4 className="font-medium">Send {amount} worth of ETH to:</h4>
                    </div>
                    <div className="flex flex-col space-y-4">
                      <div className="flex justify-center">
                        <div className="bg-white p-2 rounded-md">
                          <img src={qrUrls.eth} alt="Ethereum QR Code" width={150} height={150} />
                        </div>
                      </div>
                      <div className="flex items-center justify-between bg-black/30 p-3 rounded-md">
                        <code className="text-xs sm:text-sm text-gta-purple break-all">
                          0x8c0fd3fdc6f56e658fb1bffa8f5ddd65388ba690
                        </code>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleCopyAddress('0x8c0fd3fdc6f56e658fb1bffa8f5ddd65388ba690', 'ETH')}
                          className="ml-2 text-gta-purple border-gta-purple/50 hover:bg-gta-purple/10"
                        >
                          Copy
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="trc" className="space-y-4 pt-4">
                  <div className="crypto-card p-4 rounded-lg">
                    <div className="text-center mb-4">
                      <h4 className="font-medium">Send {amount} worth of TRC 20 to:</h4>
                    </div>
                    <div className="flex flex-col space-y-4">
                      <div className="flex justify-center">
                        <div className="bg-white p-2 rounded-md">
                          <img src={qrUrls.trc} alt="TRC20 QR Code" width={150} height={150} />
                        </div>
                      </div>
                      <div className="flex items-center justify-between bg-black/30 p-3 rounded-md">
                        <code className="text-xs sm:text-sm text-gta-pink break-all">
                          THaAnBqAvQ3YY751nXqNDzCoczYVQtBKnP
                        </code>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleCopyAddress('THaAnBqAvQ3YY751nXqNDzCoczYVQtBKnP', 'TRC 20')}
                          className="ml-2 text-gta-pink border-gta-pink/50 hover:bg-gta-pink/10"
                        >
                          Copy
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-sm font-medium mb-2 text-gta-neon">Payment Instructions:</h4>
                <ol className="text-sm space-y-2 text-muted-foreground list-decimal list-inside">
                  <li>Copy the address above or scan the QR code</li>
                  <li>Send the exact amount from your wallet</li>
                  <li>After payment, click the "I've Made Payment" button below</li>
                  <li>Confirm your payment to download your file</li>
                </ol>
              </div>
              
              <Button 
                className="download-button text-primary-foreground font-bold w-full py-6"
                onClick={handleProceedToDownload}
              >
                <QrCode className="mr-2 h-5 w-5" />
                I've Made Payment - Proceed to Download
              </Button>
              
              <p className="text-xs text-center text-muted-foreground">
                By proceeding with payment, you agree to our terms and conditions.
              </p>
            </div>
          </>
        )}
        
        {paymentStatus === 'processing' && (
          <div className="py-10 flex flex-col items-center justify-center space-y-6">
            <DialogTitle className="text-2xl text-center gta-title text-gta-neon animate-glow">
              Confirming Payment
            </DialogTitle>
            
            <div className="flex flex-col items-center space-y-4">
              <Loader2 className="h-16 w-16 text-gta-neon animate-spin" />
              <p className="text-center text-lg text-white">Verifying your payment...</p>
              <p className="text-center text-sm text-muted-foreground">
                Please wait while we confirm your transaction. This won't take long.
              </p>
            </div>
          </div>
        )}
        
        {paymentStatus === 'confirmed' && (
          <div className="py-8 flex flex-col items-center justify-center space-y-6">
            <div className="bg-gta-neon/10 rounded-full p-3 mb-2">
              <Check className="h-12 w-12 text-gta-neon" />
            </div>
            
            <DialogTitle className="text-2xl text-center gta-title text-gta-neon animate-glow">
              Payment Confirmed!
            </DialogTitle>
            
            <p className="text-center text-muted-foreground">
              Thank you for your purchase. Your download is ready.
            </p>
            
            <Button 
              className="download-button text-primary-foreground font-bold w-full py-6 mt-4"
              onClick={handleDownload}
            >
              <Download className="mr-2 h-5 w-5" />
              Download {version === 'pc' ? 'PC' : 'Mobile'} Version Now
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
