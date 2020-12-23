export default function({ store, redirect, route }) {
  if (!store.state.user.userInfo) {
    return redirect("/login");
  }
}
