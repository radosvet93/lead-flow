import { useState } from "react";
import type { Lead } from "@/types";
import { GripVertical } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PIPELINE_STAGES = [
  { id: "new", label: "New", color: "bg-slate-100 dark:bg-slate-800" },
  { id: "contacted", label: "Contacted", color: "bg-blue-100 dark:bg-blue-900" },
  { id: "interested", label: "Interested", color: "bg-purple-100 dark:bg-purple-900" },
  { id: "declined", label: "Declined", color: "bg-red-100 dark:bg-red-900" },
  { id: "closed", label: "Closed", color: "bg-orange-100 dark:bg-orange-900" },
] as const;

interface DragAndDropProps {
  leads: Lead[],
  onUpdateLead: (id: string, status: Lead['status']) => void
}

export function DragAndDrop({ leads, onUpdateLead }: DragAndDropProps) {
  const [draggedLead, setDraggedLead] = useState(null);

  const leadsByStatus = PIPELINE_STAGES.map((stage) => ({
    ...stage,
    leads: leads.filter((lead) => lead.status === stage.id),
  }));

  const handleDragStart = (e: React.DragEvent, lead: Lead) => {
    setDraggedLead(lead);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e: React.DragEvent, status: Lead['status']) => {
    e.preventDefault();
    if (draggedLead) {
      onUpdateLead(draggedLead.id, status);
      setDraggedLead(null);
    }
  };

  return (
    <div className="overflow-x-auto pb-6">
      <div className="flex gap-4 min-w-max">
        {leadsByStatus.map((column) => (
          <div
            key={column.id}
            className="shrink-0 w-80"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, column.id)}
          >
            <div className="mb-4">
              <h3 className="font-semibold flex items-center gap-2">
                {column.label}
                <Badge variant="secondary">{column.leads.length}</Badge>
              </h3>
            </div>

            <div className="space-y-3">
              {column.leads.map((lead) => (
                <Card
                  key={lead.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, lead)}
                  className="p-4 cursor-move hover:shadow-lg transition-shadow bg-card"
                >
                  <div className="flex items-start gap-3">
                    <GripVertical className="w-4 h-4 text-muted-foreground shrink-0 mt-1" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium truncate">{lead.name}</h4>
                      <p className="text-sm text-muted-foreground truncate">{lead.company || lead.email}</p>
                      {lead.jobTitle && <p className="text-xs text-muted-foreground mt-1">{lead.jobTitle}</p>}
                    </div>
                  </div>
                </Card>
              ))}

              {column.leads.length === 0 && (
                <div className="h-32 rounded-lg border-2 border-dashed border-border flex items-center justify-center text-muted-foreground text-sm">
                  Drop leads here
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
