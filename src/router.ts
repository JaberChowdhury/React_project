// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from "@generouted/react-router/client";

export type Path =
  | `/`
  | `/code`
  | `/theme`
  | `/todos`
  | `/todos/:id`
  | `/todos/add`
  | `/todos/bin`
  | `/todos/bin/:id`
  | `/todos/bin/random`
  | `/todos/random`;

export type Params = {
  "/todos/:id": { id: string };
  "/todos/bin/:id": { id: string };
};

export type ModalPath = never;

export const { Link, Navigate } = components<Path, Params>();
export const { useModals, useNavigate, useParams } = hooks<
  Path,
  Params,
  ModalPath
>();
export const { redirect } = utils<Path, Params>();
