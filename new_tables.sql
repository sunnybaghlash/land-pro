--
-- PostgreSQL database dump
--

\restrict bbR7bc3cNExzW1CSMm325jvKyskAu8ehhXRweHbtw8AbhcZHrPbfPTxIXNFWwO3

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

\unrestrict bbR7bc3cNExzW1CSMm325jvKyskAu8ehhXRweHbtw8AbhcZHrPbfPTxIXNFWwO3

