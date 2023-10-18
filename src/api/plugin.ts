import { Elysia, t } from "elysia";

export const plugin = new Elysia()
  .get("/", () => "Hello Elysia")
  .get("/json", () => {
    return ({ hello: "Elysia" })
  }, {
    beforeHandle({ bearer, set }) {
      if (!bearer) {
        set.status = 401
        set.headers['WWW-Authenticate'] = 'Bearer realm="json",error="invalid_request"'
        return "Unauthorized"
      }
    }
  })
  .post(
    '/profile',
    ({ body }) => body,
    {
      body: t.Object({
        username: t.String()
      })
    }
  )
