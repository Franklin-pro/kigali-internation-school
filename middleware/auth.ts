
export default defineNuxtRouteMiddleware((to, from) => {
    const  $auth  = useMemberStore();

    const user = $auth.user;
  
    if (!user) {
      return navigateTo('/login');
    }
  
    const { path } = to;
  
    if (path.startsWith('/dashboard/admin') && user.role !== 'admin') {
      return navigateTo('/login');
    }
  
    if (path.startsWith('member-dashboard/member') && user.role !== 'member' && user.role !== 'admin') {
      return navigateTo('/login');
    }
  });
  