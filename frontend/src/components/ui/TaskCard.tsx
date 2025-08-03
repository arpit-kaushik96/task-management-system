import React, { useState } from 'react';
import { Task } from '@/types';
import { cn, formatDate, getStatusColor, getPriorityColor, getStatusIcon, getPriorityIcon, isOverdue, truncateText, getInitials } from '@/lib/utils';
import Button from './Button';
import { Edit, Trash2, Calendar, User, MoreVertical, Clock, CheckCircle, AlertCircle } from 'lucide-react';

interface TaskCardProps {
  task: Task;
  onEdit?: (task: Task) => void;
  onDelete?: (taskId: number) => void;
  className?: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onEdit, onDelete, className }) => {
  const [showActions, setShowActions] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleEdit = () => {
    onEdit?.(task);
  };

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this task?')) {
      onDelete?.(task.id);
    }
  };

  const getStatusEmoji = (status: string) => {
    switch (status) {
      case 'TODO': return '📋';
      case 'IN_PROGRESS': return '⚡';
      case 'DONE': return '✅';
      case 'CANCELLED': return '❌';
      default: return '📝';
    }
  };



  return (
    <div 
      className={cn(
        'task-card bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group',
        isHovered && 'shadow-lg',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      {/* Header */}
      <div className="relative z-10 flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center mb-2">
            <span className="text-2xl mr-2">{getStatusEmoji(task.status)}</span>
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-800 transition-colors">
              {task.title}
            </h3>
          </div>
          {task.description && (
            <p className="text-gray-600 text-sm leading-relaxed">
              {truncateText(task.description, 120)}
            </p>
          )}
        </div>
        
        {/* Actions */}
        <div className="relative ml-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowActions(!showActions)}
            className="h-8 w-8 p-0 hover:bg-gray-100 rounded-full transition-all duration-200"
          >
            <MoreVertical className="h-4 w-4" />
          </Button>
          
          {/* Dropdown menu */}
          {showActions && (
            <div className="absolute right-0 top-10 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[120px] z-20 animate-scale-in">
              {onEdit && (
                <button
                  onClick={handleEdit}
                  className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center transition-colors"
                >
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </button>
              )}
              {onDelete && (
                <button
                  onClick={handleDelete}
                  className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center transition-colors"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Status and Priority */}
      <div className="relative z-10 flex items-center space-x-3 mb-4">
        <span className={cn(
          'status-badge inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border transition-all duration-200',
          getStatusColor(task.status)
        )}>
          <span className="mr-1">{getStatusIcon(task.status)}</span>
          {task.status.replace('_', ' ')}
        </span>
        
        <span className={cn(
          'status-badge inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border transition-all duration-200',
          getPriorityColor(task.priority)
        )}>
                          <span className="mr-1">{getPriorityIcon(task.priority)}</span>
          {task.priority}
        </span>
      </div>

      {/* Due Date with enhanced styling */}
      {task.dueDate && (
        <div className="relative z-10 flex items-center text-sm mb-4 p-3 bg-gray-50 rounded-lg border border-gray-100 group-hover:bg-gray-100 transition-colors">
          <Calendar className="h-4 w-4 mr-2 text-gray-500" />
          <div className="flex-1">
            <span className={cn(
              'font-medium',
              isOverdue(task.dueDate) && task.status !== 'DONE' 
                ? 'text-red-600' 
                : 'text-gray-700'
            )}>
              Due: {formatDate(task.dueDate)}
            </span>
            {isOverdue(task.dueDate) && task.status !== 'DONE' && (
              <div className="flex items-center mt-1">
                <AlertCircle className="h-3 w-3 text-red-500 mr-1" />
                <span className="text-xs text-red-600 font-medium">Overdue</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Assigned User with enhanced styling */}
      {task.assignedTo && (
        <div className="relative z-10 flex items-center text-sm mb-4 p-3 bg-blue-50 rounded-lg border border-blue-100 group-hover:bg-blue-100 transition-colors">
          <User className="h-4 w-4 mr-2 text-blue-500" />
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-3 shadow-sm">
              <span className="text-xs font-medium text-white">
                {getInitials(task.assignedTo.name)}
              </span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Assigned to</span>
              <div className="text-gray-600">{task.assignedTo.name}</div>
            </div>
          </div>
        </div>
      )}

      {/* Footer with enhanced styling */}
      <div className="relative z-10 flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center text-xs text-gray-500">
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center mr-2">
            <span className="text-xs font-medium text-white">
              {getInitials(task.user.name)}
            </span>
          </div>
          <span>Created by {task.user.name}</span>
        </div>
        <div className="flex items-center text-xs text-gray-500">
          <Clock className="h-3 w-3 mr-1" />
          {formatDate(task.createdAt)}
        </div>
      </div>

      {/* Progress indicator for in-progress tasks */}
      {task.status === 'IN_PROGRESS' && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse" />
      )}

      {/* Success indicator for completed tasks */}
      {task.status === 'DONE' && (
        <div className="absolute top-4 right-4">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
            <CheckCircle className="h-5 w-5 text-white" />
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskCard; 