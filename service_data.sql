--
-- PostgreSQL database dump
--

\restrict zTohE5MBsQvJal9hQIw1r8tdYFZh4Y7BQTH0o4tSVgWo0Mt6IvBg6uBm1RA7UX6

-- Dumped from database version 18.6
-- Dumped by pg_dump version 18.6

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: service_packages; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.service_packages (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    service_id uuid NOT NULL,
    package_name character varying(100) NOT NULL,
    package_code character varying(50) NOT NULL,
    description text,
    pricing_type character varying(20) NOT NULL,
    unit character varying(30),
    price numeric(10,2),
    currency character(3) DEFAULT 'INR'::bpchar NOT NULL,
    delivery_min integer,
    delivery_max integer,
    is_active boolean DEFAULT true,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    CONSTRAINT service_packages_pricing_type_check CHECK (((pricing_type)::text = ANY ((ARRAY['fixed'::character varying, 'per_unit'::character varying, 'advance'::character varying, 'callback'::character varying])::text[])))
);


ALTER TABLE public.service_packages OWNER TO postgres;

--
-- Name: services; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.services (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    service_name character varying(50) NOT NULL,
    service_display_name character varying(50) CONSTRAINT services_servide_display_name_not_null NOT NULL,
    description text,
    is_active boolean DEFAULT true,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.services OWNER TO postgres;

--
-- Data for Name: service_packages; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.service_packages (id, service_id, package_name, package_code, description, pricing_type, unit, price, currency, delivery_min, delivery_max, is_active, created_at, updated_at) FROM stdin;
4c91cb5d-0ac7-4e5a-b0df-319a40a4b870	abe55fe3-6e08-458e-817b-f3c1198372bb	Get Your Complete Jmabandi	get_jmabandi	get your complete jmabandi at your door steps	advance	\N	200.00	INR	5	5	t	2026-09-04 18:18:21.320004+05:30	2026-09-04 18:18:21.320004+05:30
48167cee-d96c-4f5e-9dcb-f060fc4053ec	aba9240d-c31c-4f9f-9c45-14f9a482913b	Get Your Naksha	naksha	get your complete Naksh	advance	\N	200.00	INR	5	5	t	2026-09-04 18:20:57.907462+05:30	2026-09-04 18:20:57.907462+05:30
550d160b-c634-4518-93b5-0c14d556929e	3786b609-57c6-4978-820b-fb645bdf16f5	Get Your 25 Year Girdawri	get_girdawri	get your complete Girdawri	advance	\N	500.00	INR	3	5	t	2026-09-04 18:23:20.161772+05:30	2026-09-04 18:23:20.161772+05:30
ba60dfd6-1140-4fbf-a598-000bb62f3589	3786b609-57c6-4978-820b-fb645bdf16f5	Get Your Warabandi	get_warabadi	get your complete certifird warabandi	advance	\N	800.00	INR	3	5	t	2026-09-04 18:24:05.19794+05:30	2026-09-04 18:24:05.19794+05:30
552069ab-a496-4b4c-b5fa-b3917716baa4	229dbdc5-9348-4fea-a57e-b9c5b30cee27	Get Your Minti	minti	get your complete certifird minti	callback	\N	\N	INR	\N	\N	t	2026-09-04 18:26:17.051854+05:30	2026-09-04 18:26:17.051854+05:30
f4d3bbe7-1431-4381-9c3f-7b4eb795724a	a1b11d2a-6fea-455f-b4c4-3235fc49287e	Complete Jmabandi Anylis	jmabandi_analyisi	get your complete jmabandi_anylis at your phone	advance	\N	200.00	INR	5	5	t	2026-09-04 18:19:47.904319+05:30	2026-09-04 18:19:47.904319+05:30
\.


--
-- Data for Name: services; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.services (id, service_name, service_display_name, description, is_active, created_at, updated_at) FROM stdin;
abe55fe3-6e08-458e-817b-f3c1198372bb	get_jmaband	 Get Your Jamabandi	apni jmabandi nikwao	t	2026-09-04 17:59:39.375215+05:30	2026-09-04 17:59:39.375215+05:30
a1b11d2a-6fea-455f-b4c4-3235fc49287e	jmabandi_analysis	Naksha Nikalwao	get your land complete naksha	t	2026-09-04 18:00:43.184614+05:30	2026-09-04 18:00:43.184614+05:30
aba9240d-c31c-4f9f-9c45-14f9a482913b	get_naksha	Naksha Nikalwao	get your land complete naksha	t	2026-09-04 18:01:14.579386+05:30	2026-09-04 18:01:14.579386+05:30
3786b609-57c6-4978-820b-fb645bdf16f5	get_girdawri_25	25 saa;a girdawri nikalwao	get your 25 saala girdawri	t	2026-09-04 18:01:58.722684+05:30	2026-09-04 18:01:58.722684+05:30
f40111a8-8d55-4fc9-9d60-b36818a1a27a	get_warabandi	warabandi ki attested copy nikawao	get your waarabandi attested copy	t	2026-09-04 18:02:36.99718+05:30	2026-09-04 18:02:36.99718+05:30
229dbdc5-9348-4fea-a57e-b9c5b30cee27	minti	certified minti krwao	certified minti krwao	t	2026-09-04 18:03:19.797953+05:30	2026-09-04 18:03:19.797953+05:30
\.


--
-- Name: service_packages service_packages_package_code_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_packages
    ADD CONSTRAINT service_packages_package_code_key UNIQUE (package_code);


--
-- Name: service_packages service_packages_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_packages
    ADD CONSTRAINT service_packages_pkey PRIMARY KEY (id);


--
-- Name: services services_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.services
    ADD CONSTRAINT services_pkey PRIMARY KEY (id);


--
-- Name: service_packages service_packages_service_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.service_packages
    ADD CONSTRAINT service_packages_service_id_fkey FOREIGN KEY (service_id) REFERENCES public.services(id) ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

\unrestrict zTohE5MBsQvJal9hQIw1r8tdYFZh4Y7BQTH0o4tSVgWo0Mt6IvBg6uBm1RA7UX6

