import { MessageSquare, TrendingUp, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

interface AnalyticsCardForDashboardProps {
  projectsCount: number | '-'
  leadsCount: number | '-'
  emailsCount: number | '-'
}

export const AnalyticsCardForDashboard = ({ projectsCount, leadsCount, emailsCount }: AnalyticsCardForDashboardProps) => {

  return (
    <div className="grid gap-4 md:grid-cols-3" >
      <Card className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Total Projects</p>
            <p className="text-3xl font-bold mt-2">{projectsCount}</p>
          </div>
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-primary" />
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Total Leads</p>
            <p className="text-3xl font-bold mt-2">{leadsCount}</p>
          </div>
          <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
            <Users className="w-6 h-6 text-blue-500" />
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Emails Sent</p>
            <p className="text-3xl font-bold mt-2">{emailsCount}</p>
          </div>
          <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
            <MessageSquare className="w-6 h-6 text-purple-500" />
          </div>
        </div>
      </Card>
    </div >
  );
};