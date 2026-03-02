import React from 'react';
import { CheckCircle2, Activity, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatusCardProps {
  status: 'online' | 'loading' | 'error';
  systemName: string;
}

export const StatusCard: React.FC<StatusCardProps> = ({ status, systemName }) => {
  const statusConfig = {
    online: {
      icon: <CheckCircle2 className="h-5 w-5 text-emerald-500" />,
      text: "Operacional",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    },
    loading: {
      icon: <Activity className="h-5 w-5 text-amber-500 animate-pulse" />,
      text: "Processando",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20"
    },
    error: {
      icon: <AlertCircle className="h-5 w-5 text-destructive" />,
      text: "Interrupção",
      bg: "bg-destructive/10",
      border: "border-destructive/20"
    }
  };

  const config = statusConfig[status];

  return (
    <Card className={`w-full max-w-md border-2 ${config.border} transition-all duration-300`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          Status do Sistema
        </CardTitle>
        {config.icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold tracking-tight">{systemName}</div>
        <div className={`mt-2 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${config.bg} ${status === 'error' ? 'text-destructive' : 'text-foreground'}`}>
          {config.text}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Cirius AI está pronto para codificar seu projeto.
        </p>
      </CardContent>
    </Card>
  );
};

export default StatusCard;
