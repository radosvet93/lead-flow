import { Card } from "@/components/ui/card";
import { TrendingUp, Users, MessageSquare } from "lucide-react";
import Projects from "./projects/Projects";
// import { useQuery } from "@tanstack/react-query";

// interface ProspectResponse {
//   id: string,
//   name: string
// }
// const fetchProspects = async () => {
//   const response = await fetch('/api/prospects');
//   const allProspects = await response.json() as ProspectResponse[];

//   return allProspects;
// };

// const { isLoading, error, data: prospects } = useQuery({
//   queryKey: ['getProspects'],
//   queryFn: fetchProspects
// });

// if (isLoading) return 'Loading...';

// if (error) return 'Something went wrong';

const Dashboard = () => {

  // TODO: Need to get the data from somewhere, maybe a DB query?
  const totalLeads = 0;
  const totalProjects = 0;
  const totalEmails = 0;

  const voidFn = () => {
    console.log('hello');
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold">Dashboard</h2>
        <p className="text-muted-foreground mt-1">Manage your outreach campaigns and track leads</p>
      </div>

      {/* Analytics Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Total Projects</p>
              <p className="text-3xl font-bold mt-2">{totalProjects}</p>
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
              <p className="text-3xl font-bold mt-2">{totalLeads}</p>
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
              <p className="text-3xl font-bold mt-2">{totalEmails}</p>
            </div>
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-purple-500" />
            </div>
          </div>
        </Card>
      </div>

      <Projects
        projects={[{ id: '1', name: 'Some project', description: 'some long descriptiton', createdAt: new Date() }, { id: '2', name: 'Another  project', description: 'some long descriptiton', createdAt: new Date() }]}
        onCreateProject={voidFn}
        onSelectProject={voidFn}
        onDeleteProject={voidFn} />
    </div>
  );

};

export default Dashboard;