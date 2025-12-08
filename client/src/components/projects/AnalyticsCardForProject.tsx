import type { Lead } from "@/types";
import { Card } from "@/components/ui/card";
import { CircleCheck, MessageSquare, TrendingUp, Users } from "lucide-react";

interface AnalyticsCardForProjectProps {
  leads: Lead[],
  emailCount: string
}

export const AnalyticsCardForProject = ({ leads, emailCount }: AnalyticsCardForProjectProps) => {
  const closedLeads = leads.filter((lead) => lead?.status === 'closed').length;
  const leadsNumber = leads?.length;
  const conversionRate = leadsNumber > 0 ? Math.round((closedLeads / leadsNumber) * 100) : 0;

  return (
    <div className="grid gap-4 md:grid-cols-4" >
      <Card className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Total Leads</p>
            <p className="text-3xl font-bold mt-2">{leadsNumber ?? '-'}</p>
          </div>
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Users className="w-4 h-4 text-primary" />
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Emails send</p>
            <p className="text-3xl font-bold mt-2">{emailCount ?? '-'}</p>
          </div>
          <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
            <MessageSquare className="w-4 h-4 text-blue-500" />
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Conversion Rate</p>
            <p className="text-3xl font-bold mt-2">{conversionRate}%</p>
          </div>
          <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-purple-500" />
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Closed Deals</p>
            <p className="text-3xl font-bold mt-2">{closedLeads ?? '-'}</p>
          </div>
          <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
            <CircleCheck className="w-4 h-4 text-green-500" />
          </div>
        </div>
      </Card>
    </div >
  );
};