export function getStatusColor(status: IBranchStatus) {
  switch (status) {
    case 'open':
      return 'text-green-500';
    case 'closed':
      return 'text-red-500';
    case 'soon':
      return 'text-yellow-500';
    default:
      return 'text-gray-500';
  }
}
